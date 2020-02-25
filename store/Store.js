import Observer from '../observer/Observer.js';

export default class Store {
  constructor(reducers) {
    this.reducers = reducers;
    this.state = {
      items: [],
      sorting: 'initial'
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