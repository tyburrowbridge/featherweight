import React from 'react'

interface DiagonalLineProps {
  color: string
}

const DiagonalLine: React.SFC<DiagonalLineProps> = props => {
  const width = '100%'
  const height = '100%'
  const stroke = props.color
  const strokeWidth = '1'

  return (
    <div className="card__diagonal-line">
      <svg width={width} height={height}>
        <line
          x1="0"
          y1="100%"
          x2="100%"
          y2="0"
          style={{ strokeWidth, stroke }}
        />
      </svg>
    </div>
  )
}

export default DiagonalLine
