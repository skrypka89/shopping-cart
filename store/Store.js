import Observer from '../observer/Observer.js';

//Store class represents a logic of the storage of the state 
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
  
  //Change the state in the storage
  dispatch(actionType, componentsId, payload) {
    if (this.reducers[actionType]) {
      this.state = this.reducers[actionType](payload, this.state);
      this.events.next(componentsId, this.state);
    }
  }
}