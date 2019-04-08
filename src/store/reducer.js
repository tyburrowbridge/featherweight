const initialState = {
  age: 21
}

export const reducer = (state = initialState, action: any) => {
  // make a new state out of the current state
  const newState = { ...state }

  // action template
  if (action.type === 'NORMAL_MODE') {
    newState.mode = 'normal-mode'
    console.log('mode: ' + newState.mode)
  }
  if (action.type === 'EDIT_MODE') {
    newState.mode = 'edit-mode'
    console.log('mode: ' + newState.mode)
  }

  // return the updated state
  return newState
}

export default reducer
