import React from 'react'
import { TagPill } from './TagPill'
import { UserInitials } from './UserInitials'
import { DiagonalLine } from '../components/DiagonalLine'
import { COLUMNS } from '../../data/COLUMNS'

type CardProps = {
  id: number
  title: string
  creator: string
  assignee: string
  dateCreated: string
  tags: any
  column: string
}

const working = COLUMNS[1]
const ready = COLUMNS[2]

export const Card: React.FC<CardProps> = props => {
  return (
    <div
      className={`card card${props.column === ready ? '--selected' : ''}`}
      onClick={handleCardClick}
    >
      <div
        className={`wavy-line wavy-line${
          props.column === working ? '--show' : '--hide'
        }`}
      />
      <div className="card-inner__wrapper">
        <div className="card-id">{props.id}</div>
        <div className="card-assignee">
          <UserInitials fullName={props.assignee} />
        </div>
        <h2 className="card-title"> {props.title} </h2>
        <div className="card-tags">{addTagsToCard(props.tags)}</div>
        <div className="card-creator">
          date created: {props.dateCreated} by {props.creator}
        </div>
        <div
          className={`card__diagonal-line-wrapper ${applyDoneStyleToCard(
            props.column
          )}`}
        >
          <DiagonalLine color="#ffeedd" />
        </div>
      </div>
    </div>
  )
}
export default Card

const handleCardClick = () => console.log('hehe, you clicked a card')

const addTagsToCard = (tags: any) =>
  tags.map((tag: any, index: number) => {
    return <TagPill label={tag} key={index} />
  })

const applyDoneStyleToCard = (x: string) => {
  const done =
    x === 'done' ? `.card__diagonal-line--show` : `card__diagonal-line--hide`
  return done
}
