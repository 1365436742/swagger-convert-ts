import { fetchEventSource } from '@microsoft/fetch-event-source'
fetchEventSource('/api/eventStream', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ a: 22 }),
  openWhenHidden: true,
  onmessage(msg) {
    console.log('msg=>>>', msg)
  },
  onerror(err) {
    console.log('err=>>>', err)
  },
})
