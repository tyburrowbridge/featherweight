import { NORMAL_MODE, VISUAL_MODE, INSERT_MODE } from '../../data/MODES'

const initialState = {
  mode: NORMAL_MODE,
  cardSelected: 0
}

export const appReducer = (state = initialState, action: any) => {
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

  if (action.type === 'INCREMENT_CARD') {
    newState.cardSelected = newState.cardSelected + 1
  }

  // return the updated state
  console.log(newState)
  return newState
}
