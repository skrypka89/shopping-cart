export default class Observer{
  constructor() {
    this.subscribers = {};
  }

  subscribe(componentsId, callback) {
    for (let componentId of componentsId) {
      if (!this.subscribers[componentId]) {
        this.subscribers[componentId] = [];
      }

      this.subscribers[componentId].push(callback);
    } 
  }

  unsubscribe(componentsId, callback) {
    for (let componentId of componentsId) {
      this.subscribers[componentId] = this.subscribers[componentId]
        .filter(cb => cb !== callback)
      ;
    }
  }

  next(componentsId, payload) {
    for (let componentId of componentsId) {
      this.subscribers[componentId].forEach(cb => cb(payload));
    }
  }
}