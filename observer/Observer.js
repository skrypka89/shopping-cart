export default class Observer{
  constructor() {
    this.subscribers = {};
  }

  subscribe(componentId, callback) {
    if (!this.subscribers[componentId]) {
      this.subscribers[componentId] = [];
    }

    this.subscribers[componentId].push(callback);
  }

  unsubscribe(componentId, callback) {
    this.subscribers[componentId] = this.subscribers[componentId]
      .filter(cb => cb !== callback)
    ;
  }

  next(componentId, payload) {
    this.subscribers[componentId].forEach(cb => cb(payload));
  }
}