// TODO: add states --> [active, archived]

import React from 'react'
import TagPill from './TagPill'
import { UserInitials } from './UserInitials'

interface CardProps {
  id: number
  title: string
  creator: string
  assignee: string
  dateCreated: string
  tags: any
  stage: string
}

const cardClick = () => console.log('hehe, you clicked a card')
const addTags = (tags: any) =>
  tags.map((tag: any, index: number) => {
    return <TagPill label={tag} key={index} />
  })

export const Card: React.SFC<CardProps> = props => {
  return (
    <div className="card" onClick={cardClick}>
      <div className="card-id">{props.id}</div>
      <div className="card-assignee">
        <UserInitials fullName={props.assignee} />
      </div>

      <div>
        <h2 className="card-title"> {props.title} </h2>
      </div>

      <div className="card-tags">{addTags(props.tags)}</div>
      <div>
        <div className="card-assignee">
          date created: {props.dateCreated} by {props.creator}
        </div>
      </div>
    </div>
  )
}
export default Card

Card.defaultProps = {}

// export const Card: React.SFC<CardProps> = props => {
//   const cardClick = () => console.log('hehe, you clicked me')
//   const label = props.label
//   const id = props.id
//   const stage = props.stage
//   const assignee = props.assignee || ''
//   const tags = props.tags.map((tag: string) => (
//     <TagPill label={tag} key={tag} />
//   ))
//
//   return (
//     <div className="card" onClick={cardClick}>
//       <span className="card-id">
//         {' '}
//         {id} | {stage}
//       </span>
//       <span className="card-assignee">
//         <UserInitials fullName={assignee} />{' '}
//       </span>
//       <h1 className="card-title">{label}</h1>
//       <div className="tag-pill-wrapper">{tags}</div>
//     </div>
//   )
// }
//
// export default Card
//
// Card.defaultProps = {
//   id: 0,
//   assignee: 'unassigned',
//   label: 'card is undefined',
//   tags: ['no tags found']
// }
