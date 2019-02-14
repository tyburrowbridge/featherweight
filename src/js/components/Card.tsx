// TODO: add states --> [active, archived]
// TODO: add column []
// TODO:
// TODO:
// TODO:
// TODO:

import React from 'react'
import TagPill from './TagPill'

interface CardProps {
  id?: number
  assignee?: string
  label?: string
  tags: any
}

export const Card: React.SFC<CardProps> = props => {
  const label = props.label
  const id = props.id
  const assignee = props.assignee
  const tags = props.tags.map((tag: string) => (
    <TagPill label={tag} key={tag} />
  ))

  return (
    <div className="card" onClick={cardClick}>
      <span className="card-id"> {id} </span>
      <span className="card-assignee">-> {assignee} </span>
      <h1 className="card-title">{label}</h1>
      <div className="tag-pill-wrapper">{tags}</div>
    </div>
  )
}

export default Card

const cardClick = () => console.log('hehe, you clicked me')

Card.defaultProps = {
  id: 0,
  assignee: 'unassigned',
  label: 'card is undefined',
  tags: ['no tags found']
}
