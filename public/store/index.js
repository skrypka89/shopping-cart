import Store from './Store.js';
import createReducers from './reducers.js';

//Initialization of the temporary storage
export default new Store(createReducers());