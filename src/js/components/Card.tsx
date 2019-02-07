import React from 'react'

interface CardProps {
  id?: number
  assignee?: string
  label?: string
}

export const Card: React.SFC<CardProps> = props => {
  return (
    <div className="card" onClick={cardClick}>
      <span className="card-id"> {props.id} </span>
      <span className="card-assignee">-> {props.assignee} </span>
      <h2>{props.label}</h2>
    </div>
  )
}

export default Card

Card.defaultProps = {
  id: 0,
  assignee: 'unassigned',
  label: 'card is undefined'
}

const cardClick = () => console.log('hehe, you clicked me')
