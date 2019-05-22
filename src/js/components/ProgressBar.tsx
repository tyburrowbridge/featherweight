import React from 'react'
import { Percent } from '../utils/Math'

type ProgressBarProps = {
  progress: number
  limit: number
  width: number
}

export const ProgressBar: React.FC<ProgressBarProps> = props => {
  const progress = props.progress
  const limit = props.limit

  const progressBarStyle = {
    width: `${100 - Percent(progress, limit)}px`
  }

  return <div className="progress-bar" style={progressBarStyle} />
}

ProgressBar.defaultProps = {
  progress: 5,
  limit: 10,
  width: 200
}
