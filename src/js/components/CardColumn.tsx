import React from 'react'
import Card from './Card'
import { CARDS_DATA } from '../../data/CARDS_DATA'
import { EpicHeader } from '../components/EpicHeader'

interface CardColumnProps {
  name: string
}

export const CardColumn: React.SFC<CardColumnProps> = props => {
  return (
    <>
      <EpicHeader />
      <div className="card-column-wrapper">{cards}</div>
    </>
  )
}

export default CardColumn

CardColumn.defaultProps = {
  name: 'Blank Column Name'
}

const cards = CARDS_DATA.map(card => {
  return <Card id={card.id} label={card.label} assignee={card.assignee} />
})
