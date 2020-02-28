import Observer from '../observer/Observer.js';

export default class Store {
  constructor(reducers) {
    this.reducers = reducers;
    this.state = {
      items: [],
      sorting: 'initial',
      currency: 'UAH',
      rates: {
        USD: undefined,
        EUR: undefined,
        GBP: undefined
      }
    };
    this.events = new Observer();
  }

  dispatch(actionType, componentsId, payload) {
    if (this.reducers[actionType]) {
      this.state = this.reducers[actionType](payload, this.state);
      this.events.next(componentsId, this.state);
    }
  }
}