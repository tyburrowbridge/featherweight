import React from 'react'

interface ProgressBarProps {
  complete: number
  total: number
}

const percent = (x: number, y: number) => {
  return x / y
}

export const ProgressBar: React.SFC<ProgressBarProps> = props => {
  const complete = props.complete
  const total = props.total
  return (
    <div className="progress-bar">
      <div>{complete + ' / ' + total}</div>
    </div>
  )
}
export default ProgressBar

ProgressBar.defaultProps = {
  complete: 5,
  total: 10
}
