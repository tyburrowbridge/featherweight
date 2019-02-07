import React from 'react'
import Card from './Card'
import { CARDS_DATA } from '../../data/CARDS_DATA'
import { EPIC_DATA } from '../../data/CARDS_DATA'

interface CardColumnProps {
  name: string
}

export const CardColumn: React.SFC<CardColumnProps> = props => {
  return (
    <>
      <h3>{epicLabel}</h3>
      <span className="epic-story"> {epicStory}</span>
      <div className="card-column-wrapper">{getAllCards}</div>
    </>
  )
}

export default CardColumn

CardColumn.defaultProps = {
  name: 'Blank Column Name'
}

const getAllCards = CARDS_DATA.map(card => {
  return <Card id={card.id} label={card.label} assignee={card.assignee} />
})

const epicLabel = EPIC_DATA[0].label
const epicStory = EPIC_DATA[0].story
