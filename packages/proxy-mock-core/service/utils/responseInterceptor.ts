import type * as http from 'http'
import * as zlib from 'zlib'

type Interceptor<TReq = http.IncomingMessage, TRes = http.ServerResponse> = (
  buffer: Buffer,
  proxyRes: TReq,
  req: TReq,
  res: TRes,
) => Promise<Buffer | string>

export function responseInterceptor<
  TReq extends http.IncomingMessage = http.IncomingMessage,
  TRes extends http.ServerResponse = http.ServerResponse,
>(interceptor: Interceptor<TReq, TRes>) {
  return async function proxyResResponseInterceptor(
    proxyRes: TReq,
    req: TReq,
    res: TRes,
  ): Promise<void> {
    const originalProxyRes = proxyRes
    let buffer = Buffer.from('', 'utf8')

    // decompress proxy response
    const _proxyRes = decompress<TReq>(
      proxyRes,
      proxyRes.headers['content-encoding'],
    )

    // concat data stream
    _proxyRes.on('data', chunk => (buffer = Buffer.concat([buffer, chunk])))

    _proxyRes.on('end', async () => {
      // copy original headers
      copyHeaders(proxyRes, res)
      const interceptedBuffer = Buffer.from(
        await interceptor(buffer, originalProxyRes, req, res),
      )
      if (res.getHeader('Content-Type') === 'text/event-stream') {
        res.end()
        return
      } else {
        res.setHeader(
          'content-length',
          Buffer.byteLength(interceptedBuffer, 'utf8'),
        )
        res.write(interceptedBuffer)
        res.end()
      }
    })

    _proxyRes.on('error', error => {
      res.end(`Error fetching proxied request: ${error.message}`)
    })
  }
}

function decompress<TReq extends http.IncomingMessage = http.IncomingMessage>(
  proxyRes: TReq,
  contentEncoding?: string,
): TReq | zlib.Gunzip | zlib.Inflate | zlib.BrotliDecompress {
  let _proxyRes: TReq | zlib.Gunzip | zlib.Inflate | zlib.BrotliDecompress =
    proxyRes
  let decompress

  switch (contentEncoding) {
    case 'gzip':
      decompress = zlib.createGunzip()
      break
    case 'br':
      decompress = zlib.createBrotliDecompress()
      break
    case 'deflate':
      decompress = zlib.createInflate()
      break
    default:
      break
  }

  if (decompress) {
    _proxyRes.pipe(decompress)
    _proxyRes = decompress
  }

  return _proxyRes
}

function copyHeaders(originalResponse: any, response: any): void {
  response.statusCode = originalResponse.statusCode
  response.statusMessage = originalResponse.statusMessage

  if (response.setHeader) {
    let keys = Object.keys(originalResponse.headers)
    // ignore chunked, brotli, gzip, deflate headers
    keys = keys.filter(
      key => !['content-encoding', 'transfer-encoding'].includes(key),
    )

    keys.forEach(key => {
      let value = originalResponse.headers[key]

      if (key === 'set-cookie') {
        // remove cookie domain
        value = Array.isArray(value) ? value : [value]
        value = value.map((x: string) => x.replace(/Domain=[^;]+?/i, ''))
      }

      response.setHeader(key, value)
    })
  } else {
    response.headers = originalResponse.headers
  }
}
