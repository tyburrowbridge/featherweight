import React from 'react'
import { Component } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { NORMAL_MODE, VISUAL_MODE, INSERT_MODE } from '../components/Modes'

interface ModeBarProps {
  currentMode: string
}

export const ModeBar: React.FC<ModeBarProps> = ({ currentMode }) => {
  const [mode, setMode] = useState('')
  const updateMode = (mode: string) => {
    mode === NORMAL_MODE ? setMode('mode-bar__wrapper--normal') : null
    mode === VISUAL_MODE ? setMode('mode-bar__wrapper--visual') : null
    mode === INSERT_MODE ? setMode('mode-bar__wrapper--insert') : null
  }

  return (
    <div>
      <div className={updateMode('')}>
        <h3> there is the modebar </h3>
        <button onClick={() => updateMode(NORMAL_MODE)}>Normal Mode</button>
        <button onClick={() => updateMode(VISUAL_MODE)}>Visual Mode</button>
        <button onClick={() => updateMode(INSERT_MODE)}>Insert Modei</button>
      </div>
    </div>
  )
}

//    return mode === NORMAL_MODE
//      ? 'mode-bar__wrapper--normal'
//      : mode === VISUAL_MODE
//      ? 'mode-bar__wrapper--visual'
//      : mode === INSERT_MODE
//      ? 'mode-bar__wrapper--insert'
//      : NORMAL_MODE
//
