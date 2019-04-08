// TODO: add switches to handle actions for specific keys

import React from 'react'
import { Component } from 'react'
import { useState, useEffect } from 'react'

interface DetectKeyPressProps {
  targetKey: number
  actionType: string
  mode: any
}

export const DetectKeyPress: React.SFC<DetectKeyPressProps> = props => {
  const targetKey = props.targetKey
  const actionType = props.actionType
  const mode = props.mode

  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false)

  // If pressed key is our target key then set to true
  const downHandler = (key: any, actionType: string) => {
    if (key.keyCode === targetKey) {
      dispatch({ type: 'NORMAL_MODE' })
      console.log(`targetKey fired : ${targetKey}`)
      console.log(`fire action     : ${actionType}`)
      console.log(`mode            : ${mode}`)
    }
  }

  // If released key is our target key then set to false
  const upHandler = (key: any) => {
    if (key.keyCode === targetKey) {
      setKeyPressed(false)
    }
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

  return (
    <div>
      <h3> detecting key: {props.targetKey} </h3>
      <div />
    </div>
  )
}

export default DetectKeyPress

// export const DetectKeyPress = () => {
//   const [count, setCount] = useState(1)
//
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}> fuck yea buttons </button>
//     </div>
//   )
// }
//
//
//
//------------------------------------------------
// export default DetectKeyPress
// export const DetectKeyPress: React.SFC<DetectKeyPressProps> = () => {
//   // Call our hook for each key that we'd like to monitor
//   const happyPress = () => useKeyPress('h')
//   // const sadPress = () => useKeyPress('s')
//   // const robotPress = () => useKeyPress('r')
//   // const foxPress = () => useKeyPress('f')
//   console.log('detect key press loaded')
//   return (
//     <div>
//       <div>h, s, r, f</div>
//       <div>
//         {useKeyPress && '😊'}
//         {happyPress && '😊'}
//         {sadPress && '😢'}
//         {robotPress && '🤖'}
//         {foxPress && '🦊'}
//       </div>
//     </div>
//   )
// }
