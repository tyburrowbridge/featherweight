import {
  NORMAL_MODE,
  VISUAL_MODE,
  INSERT_MODE
} from '../../js/components/Modes'

const initialState = {
  mode: NORMAL_MODE
}

export const modesReducer = (state = initialState, action) => {
  // make a new state out of the current state
  const newState = { ...state }
  console.log('current mode    : ' + newState.mode)

  // action template
  if (action.type === NORMAL_MODE) {
    newState.mode = NORMAL_MODE
    console.log('updated mode    : ' + newState.mode)
  }
  if (action.type === VISUAL_MODE) {
    newState.mode = VISUAL_MODE
    console.log('updated mode    : ' + newState.mode)
  }
  if (action.type === INSERT_MODE) {
    newState.mode = INSERT_MODE
    console.log('updated mode    : ' + newState.mode)
  }

  // return the updated state
  return newState
}

export default modesReducer
