const initialState = {activeUser: undefined};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_ACTIVE_USER':
      const newState = {
        ...state,
        activeUser: action.payload  
      }
      return newState
    default:
      return state
  }
}