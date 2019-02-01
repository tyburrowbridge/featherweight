import React from 'react'

interface CardProps {
  label?: string
}

export const Card: React.SFC<CardProps> = props => {
  return (
    <div className="card">
      <span>{props.label}</span>
    </div>
  )
}

export default Card

Card.defaultProps = {
  label: 'card has no label'
}
