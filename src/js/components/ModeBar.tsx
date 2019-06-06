import React from 'react'
import { NORMAL_MODE, VISUAL_MODE, INSERT_MODE } from '../../data/MODES'

type ModeBarProps = {
  currentMode: string
  currentCard: number
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

const updateModeBarStyle = (mode: string): string => {
  return mode === NORMAL_MODE
    ? '--normal'
    : mode === VISUAL_MODE
      ? '--visual'
      : mode === INSERT_MODE
        ? '--insert'
        : 'no mode passed'
}
