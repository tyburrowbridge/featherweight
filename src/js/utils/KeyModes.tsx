import React from 'react'
// import { DetectKeyPress } from './DetectKeyPress'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { NORMAL_MODE, VISUAL_MODE, INSERT_MODE } from '../components/Modes'

interface KeyModeProps {
  normalMode: () => {}
  visualMode: () => {}
  insertMode: () => {}
}

const KeyModes: React.FC<KeyModeProps> = ({
  normalMode,
  visualMode,
  insertMode
}) => {
  const normalModeKey = 78 // n //
  const visualModeKey = 86 // v //
  const insertModeKey = 73 // i //

  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = (key: any) => {
    console.log(`key down        : [${key.keyCode}]`)
    key.keyCode === normalModeKey ? normalMode() : null
    key.keyCode === visualModeKey ? visualMode() : null
    key.keyCode === insertModeKey ? insertMode() : null
  }

  // If released key is our target key then set to false
  const upHandler = (key: any) => {
    key.keyCode === normalModeKey ? setKeyPressed(false) : null
    key.keyCode === visualModeKey ? setKeyPressed(false) : null
    key.keyCode === insertModeKey ? setKeyPressed(false) : null
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

  return <div />
}

const mapStateToProps = (state: any) => {
  return { mode: state.mode }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    normalMode: () => dispatch({ type: NORMAL_MODE }),
    visualMode: () => dispatch({ type: VISUAL_MODE }),
    insertMode: () => dispatch({ type: INSERT_MODE })
  }
}

export const SetKeyModes = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyModes)

// return <DetectKeyPress targetKey={78} setMode={setKeyModes} />
// return <DetectKeyPress targetKey={78} mode={Modes.normal} />
// setMode: () => dispatch({ type: NORMAL_MODE })
// <DetectKeyPress targetKey={78} setMode={setKeyModes} mode={NORMAL_MODE} />
