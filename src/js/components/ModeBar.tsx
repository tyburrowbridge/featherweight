import React from 'react'

interface ModeBarProps {
  currentMode: string
}

export const ModeBar: React.FC<ModeBarProps> = (): any => {
  return (
    <div className="mode-bar__wrapper">
      <div>
        <h3> there is the modebar </h3>
      </div>
    </div>
  )
}
