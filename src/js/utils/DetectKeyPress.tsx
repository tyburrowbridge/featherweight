import React from 'react'
import { Component } from 'react'
import { useState, useEffect } from 'react'

interface DetectKeyPressProps {
  targetKey: number
  mode: any
  setMode: any
}

const handleKeyDown = (setMode: any) => {
  console.log('target key hit!')
  setMode()
}

export const DetectKeyPress: React.FC<DetectKeyPressProps> = props => {
  const targetKey = props.targetKey
  const mode = props.mode
  const setMode = props.setMode
  console.log(`target key: ${targetKey}`)

  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = (key: any) => {
    key.keyCode === props.targetKey ? handleKeyDown(setMode) : null
  }

  // If released key is our target key then set to false
  const upHandler = (key: any) => {
    key.keyCode === props.targetKey ? setKeyPressed(false) : null
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
