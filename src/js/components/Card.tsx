import React from 'react'
import TagPill from './TagPill'

interface CardProps {
  id?: number
  assignee?: string
  label?: string
  tags: any
}

export const Card: React.SFC<CardProps> = props => {
  return (
    <div className="card" onClick={cardClick}>
      <span className="card-id"> {props.id} </span>
      <span className="card-assignee">-> {props.assignee} </span>
      <h2>{props.label}</h2>
      <span>{props.tags}</span>
    </div>
  )
}

export default Card

Card.defaultProps = {
  id: 0,
  assignee: 'unassigned',
  label: 'card is undefined',
  tags: ['no tags found']
}

const cardClick = () => console.log('hehe, you clicked me')
const cardTags = (tags: any) => {
  tags.map((tag: any) => {
    ;<TagPill label={tag} />
  })
}
