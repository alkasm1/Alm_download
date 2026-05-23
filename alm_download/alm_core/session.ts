export class ALMSession {
  constructor(id) {
    this.id = id;
    this.state = "init";
    this.meta = {};
  }

  setState(s) {
    this.state = s;
  }

  setMeta(key, value) {
    this.meta[key] = value;
  }

  getMeta(key) {
    return this.meta[key];
  }
}
