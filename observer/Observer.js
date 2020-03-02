/* Observer is responsible for the subscription of callbacks which are launched
every time when the state of the storage is changed */
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

  //Broadcasting of the subscribers
  next(componentsId, payload) {
    for (let componentId of componentsId) {
      this.subscribers[componentId].forEach(cb => cb(payload));
    }
  }
}