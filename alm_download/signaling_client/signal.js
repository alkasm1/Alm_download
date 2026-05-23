/* path: alm_download/signaling_client/signal.js */

export class SignalClient {
  constructor(url) {
    this.ws = new WebSocket(url);
    this.handlers = {};
  }

  on(type, fn) {
    this.handlers[type] = fn;
  }

  send(to, payload) {
    this.ws.send(JSON.stringify({ to, ...payload }));
  }

  bind() {
    this.ws.onmessage = (ev) => {
      const data = JSON.parse(ev.data);
      if (this.handlers[data.type]) {
        this.handlers[data.type](data);
      }
    };
  }
}
