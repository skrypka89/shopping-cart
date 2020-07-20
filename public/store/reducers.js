//Creation of the reducers indicating how to change the state in the storage
export default function createReducers() {
  return {
    addItem: (payload, state) => ({
      ...state,
      items: [ ...state.items, payload ]
    }),
    removeItem: (payload, state) => ({
      ...state,
      items: [
        ...state.items.slice(0, payload.id),
        ...state.items.slice(payload.id + 1, state.items.length)
      ]
    }),
    removeAllItems: (payload, state) => ({
      ...state,
      items: []
    }),
    changeSorting: (payload, state) => ({
      ...state,
      sorting: payload
    }),
    changeCurrency: (payload, state) => ({
      ...state,
      currency: payload
    }),
    setRates: (payload, state) => ({
      ...state,
      rates: payload
    })
  };
}