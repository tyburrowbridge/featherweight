import React from 'react'
import { Component } from 'react'
import { useState, useEffect } from 'react'

interface DetectKeyPressProps {
  targetKey: any
}

export const DetectKeyPress = () => {
  const [count, setCount] = useState(1)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}> fuck yea buttons </button>
    </div>
  )
}

export default DetectKeyPress
//
//
//    const [count, setCount] = useState(0)
//
//     return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 1)}>Click me</button>
//       </div>
//     )
//

// // Usage
// export const DetectKeyPress: React.SFC<DetectKeyPressProps> = props => {
//   console.log('detect key press loaded')
//
//   // State for keeping track of whether key is pressed
//   const [keyPressed, setKeyPressed] = useState(false)
//   // Add event listeners
//   useEffect(() => {
//     window.addEventListener('keydown', downHandler)
//     window.addEventListener('keyup', upHandler)
//
//     // Remove event listeners on cleanup
//     return () => {
//       window.removeEventListener('keydown', downHandler)
//       window.removeEventListener('keyup', upHandler)
//     }
//   }, []) // Empty array ensures that effect is only run on mount an
//
//   return (
//     <div>
//       <h3> detecting key: {props.targetKey} </h3>
//       <div />
//     </div>
//   )
// }
//
// export default DetectKeyPress
//
// // If pressed key is our target key then set to true
// const downHandler = (key: any) => {
//   //  if (key === targetKey) {
//   //    setKeyPressed(true)
//   //  }
//   console.log('key down')
// }
//
// // If released key is our target key then set to false
// const upHandler = (key: any) => {
//   //  if (key === targetKey) {
//   //    setKeyPressed(false)
//   //  }
//   console.log('key up')
// }

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
