const initialState = {
  mode: 'NORMAL_MODE'
}

export const modesReducer = (state = initialState, action) => {
  // make a new state out of the current state
  const newState = { ...state }
  console.log('called reducer')
  console.log('mode: ' + newState.mode)

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

export default modesReducer
