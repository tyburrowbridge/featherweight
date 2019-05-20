import React from 'react'
import { Component } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { NORMAL_MODE, VISUAL_MODE, INSERT_MODE } from '../../data/MODES'

const normal = NORMAL_MODE.name
const visual = VISUAL_MODE.name
const insert = INSERT_MODE.name

type ModeBarProps = {
  currentMode: string
  currentCard: number
}

const updateModeBarStyle = (mode: string): string => {
  return mode === normal
    ? '--normal'
    : mode === visual
    ? '--visual'
    : mode === insert
    ? '--insert'
    : 'no mode passed'
}

export const ModeBar: React.FC<ModeBarProps> = props => {
  const currentMode = props.currentMode
  const currentCard = props.currentCard

  return (
    <div
      className={`mode-bar__wrapper mode-bar__wrapper${updateModeBarStyle(
        currentMode
      )}`}
    >
      <div className="mode-bar__item">{currentMode}</div>
      <div className="mode-bar__item">card: {currentCard}</div>
    </div>
  )
}
