/* path: alm_download/alm_core/frames.ts */

export class ALMFrame {
  constructor(type, payload) {
    this.type = type;
    this.payload = payload;
    this.timestamp = Date.now();
  }

  toJSON() {
    return {
      type: this.type,
      payload: this.payload,
      timestamp: this.timestamp
    };
  }

  static fromJSON(obj) {
    return new ALMFrame(obj.type, obj.payload);
  }
}
