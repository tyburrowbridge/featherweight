import React from 'react'

interface CardProps {
  label?: string
}

const Card: React.SFC<CardProps> = props => {
  return (
    <div>
      <span>{props.label}</span>
    </div>
  )
}

export default Card

Card.defaultProps = {
  label: 'card has no label'
}
