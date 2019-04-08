const initialState = {
  age: 21
}

export const reducer = (state = initialState, action: any) => {
  // make a new state out of the current state
  const newState = { ...state }

  // action template
  if (action.type === 'SOME_ACTION') {
    //do this
  }

  // return the updated state
  return newState
}

export default reducer
