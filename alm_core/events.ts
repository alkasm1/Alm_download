/* path: alm_download/alm_core/events.ts */

export class ALMEventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, fn) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(fn);
  }

  emit(event, data) {
    if (!this.events[event]) return;
    for (const fn of this.events[event]) fn(data);
  }
}
