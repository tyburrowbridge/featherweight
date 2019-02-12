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
  const tags = () => tags.map((x: any) => { <TagPill label={x}})  

  return (
    <div className="card" onClick={cardClick}>
      <span className="card-id"> {id} </span>
      <span className="card-assignee">-> {assignee} </span>
      <h2>{label}</h2>
      <TagPill label={tag} />
    </div>
  )
}

export default Card

const cardClick = () => console.log('hehe, you clicked me')
const cardTags = (tags: any) => {
  // console.log(tags)
  tags.map((tag: any) => {
    console.log('card tag: ' + tag)
    return <TagPill label={tag} />
  })
}

Card.defaultProps = {
  id: 0,
  assignee: 'unassigned',
  label: 'card is undefined',
  tags: ['no tags found']
}
