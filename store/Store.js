import Observer from '../observer/Observer.js';

export default class Store {
  constructor(reducers) {
    this.reducers = reducers;
    this.state = {
      items: []
    };
    this.events = new Observer();
  }

  dispatch(actionType, componentId, payload) {
    if (this.reducers[actionType]) {
      this.state = this.reducers[actionType](payload, this.state);
      this.events.next(componentId, this.state);
    }
  }
}