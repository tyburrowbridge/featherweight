// imports
import React from "react"
import { connect } from "react-redux"
import { useState, useEffect } from "react"
import {
  NORMAL_MODE,
  NORMAL_MODE_KEY,
  VISUAL_MODE,
  VISUAL_MODE_KEY,
  INSERT_MODE,
  INSERT_MODE_KEY
} from "../../data/MODES"
import { ModeBar } from "../components/ModeBar"

type KeyModeProps = {
  toggleNormalMode: () => {}
  toggleVisualMode: () => {}
  toggleInsertMode: () => {}
  incrementCardSelected: () => {}
  cardSelected: number
  mode: string
}

const KeyModes: React.FC<KeyModeProps> = ({
  toggleNormalMode,
  toggleVisualMode,
  toggleInsertMode,
  incrementCardSelected,
  cardSelected,
  mode
}) => {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = (key: any) => {
    incrementCardSelected()
    console.log(`key pressed :   ${key.keyCode}`)
    return key.keyCode === NORMAL_MODE_KEY
      ? (toggleNormalMode(), setKeyPressed(true))
      : key.keyCode === VISUAL_MODE_KEY
      ? (toggleVisualMode(), setKeyPressed(true))
      : key.keyCode === INSERT_MODE_KEY
      ? (toggleInsertMode(), setKeyPressed(true))
      : null
  }

  // If released key is our target key then set to false
  const upHandler = (key: any) => {
    return key.keyCode === NORMAL_MODE_KEY
      ? setKeyPressed(false)
      : key.keyCode === VISUAL_MODE_KEY
      ? setKeyPressed(false)
      : key.keyCode === INSERT_MODE_KEY
      ? setKeyPressed(false)
      : null
  }

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler)
    window.addEventListener("keyup", upHandler)

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler)
      window.removeEventListener("keyup", upHandler)
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
    toggleNormalMode: () => dispatch({ type: NORMAL_MODE }),
    toggleVisualMode: () => dispatch({ type: VISUAL_MODE }),
    toggleInsertMode: () => dispatch({ type: INSERT_MODE }),
    incrementCardSelected: () => dispatch({ type: "INCREMENT_CARD" })
  }
}

export const SetKeyModes = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyModes)
