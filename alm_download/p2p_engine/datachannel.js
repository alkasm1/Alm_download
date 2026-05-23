export class DataChannel {
  constructor(pc) {
    this.pc = pc;
    this.channel = null;
  }

  create() {
    this.channel = this.pc.createDataChannel("file");
    return this.channel;
  }

  bind(onMessage) {
    this.pc.ondatachannel = (ev) => {
      this.channel = ev.channel;
      this.channel.onmessage = (msg) => onMessage(msg.data);
    };
  }

  send(data) {
    if (this.channel && this.channel.readyState === "open") {
      this.channel.send(data);
    }
  }
}
