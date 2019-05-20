import { NORMAL_MODE, VISUAL_MODE, INSERT_MODE } from '../../data/MODES'

const initialState = {
  mode: NORMAL_MODE.name,
  cardSelected: 0
}

export const appReducer = (state = initialState, action: any) => {
  // make a new state out of the current state
  const newState = { ...state }
  console.log('current mode    : ' + newState.mode)

  // action template
  if (action.type === NORMAL_MODE.name) {
    newState.mode = NORMAL_MODE.name
    console.log('updated mode    : ' + newState.mode)
  }

  if (action.type === VISUAL_MODE.name) {
    newState.mode = VISUAL_MODE.name
    console.log('updated mode    : ' + newState.mode)
  }
  if (action.type === INSERT_MODE.name) {
    newState.mode = INSERT_MODE.name
    console.log('updated mode    : ' + newState.mode)
  }

  if (action.type === 'INCREMENT_CARD') {
    newState.cardSelected = newState.cardSelected + 1
  }

  // return the updated state
  console.log(newState)
  return newState
}
