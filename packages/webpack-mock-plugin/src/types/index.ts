import express from 'express';
import type * as http from 'http';
import type * as httpProxy from 'http-proxy';
export interface ProxyMockPluginOptions {
  /** 端口 */
  port?: number;
  /** 储存路径 */
  savePath?: string;
}
export interface Request extends express.Request {}
export interface Response extends express.Response {}
export type OnProxyReqCallback = (
  proxyReq: http.ClientRequest,
  req: Request,
  res: Response,
  options: httpProxy.ServerOptions
) => void;
