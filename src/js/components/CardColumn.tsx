import React from 'react'
import Card from './Card'
import data from '../../data/CARDS.json'

interface CardObj {
  [key: string]: any
  id: number
  title: string
  assignee: string
  creator: string
  dateCreated: string
  stage: string
  tags: any
}

const cards: CardObj = data.cards as any

interface CardColumnProps {
  title: string
}

const cardColumn = (column: string) =>
  cards
    .filter((card: CardObj) => card.stage === column)
    .map((card: CardObj, index: number) => (
      <Card
        key={index}
        id={card.id}
        title={card.title}
        assignee={card.assignee}
        creator={card.creator}
        dateCreated={card.dateCreated}
        column={card.column}
        tags={card.tags}
      />
    ))

export const CardColumn: React.SFC<CardColumnProps> = props => {
  return (
    <div className="card-column">
      <div className={`card-column__${props.title}`}>
        <div className="card-column__card-holder">
          {cardColumn(props.title)}
        </div>
      </div>
    </div>
  )
}
export default CardColumn

CardColumn.defaultProps = {
  title: 'New Column'
}
