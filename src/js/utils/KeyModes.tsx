// imports
import React from 'react'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { NORMAL_MODE, VISUAL_MODE, INSERT_MODE } from '../../data/MODES'
import { ModeBar } from '../components/ModeBar'

// variables
const normal = NORMAL_MODE.name
const normalKey = NORMAL_MODE.key
const visual = VISUAL_MODE.name
const visualKey = VISUAL_MODE.key
const insert = INSERT_MODE.name
const insertKey = INSERT_MODE.key

type KeyModeProps = {
  normalMode: () => {}
  visualMode: () => {}
  insertMode: () => {}
  incrementCardSelected: () => {}
  cardSelected: number
  mode: string
}

const KeyModes: React.FC<KeyModeProps> = ({
  normalMode,
  visualMode,
  insertMode,
  incrementCardSelected,
  cardSelected,
  mode
}) => {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = (key: any) => {
    key.keyCode === normalKey ? (normalMode(), setKeyPressed(true)) : null
    key.keyCode === visualKey ? (visualMode(), setKeyPressed(true)) : null
    key.keyCode === insertKey ? (insertMode(), setKeyPressed(true)) : null
    incrementCardSelected()
    console.log(`key pressed :   ${key.keyCode}`)
  }

  // If released key is our target key then set to false
  const upHandler = (key: any) => {
    key.keyCode === normalKey ? setKeyPressed(false) : null
    key.keyCode === visualKey ? setKeyPressed(false) : null
    key.keyCode === insertKey ? setKeyPressed(false) : null
  }

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount
  return <ModeBar currentMode={mode} currentCard={cardSelected} />
}
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    mode: state.mode,
    cardSelected: state.cardSelected
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    normalMode: () => dispatch({ type: normal }),
    visualMode: () => dispatch({ type: visual }),
    insertMode: () => dispatch({ type: insert }),
    incrementCardSelected: () => dispatch({ type: 'INCREMENT_CARD' })
  }
}

export const SetKeyModes = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyModes)
