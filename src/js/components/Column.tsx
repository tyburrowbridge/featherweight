import React from 'react'
import Card from './Card'
import data from '../../data/CARDS.json'

type CardObj = {
  [key: string]: any
  id: number
  title: string
  assignee: string
  creator: string
  dateCreated: string
  column: string
  tags: any
}

const cards: CardObj = data.cards as any

interface ColumnProps {
  title: string
}

const addCardColumns = (column: string) =>
  cards
    .filter((card: CardObj) => card.column === column)
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

export const Column: React.FC<ColumnProps> = props => {
  return (
    <div className="card-column">
      <div className={`card-column__${props.title}`}>
        <div className="card-column__card-holder">
          {addCardColumns(props.title)}
        </div>
      </div>
    </div>
  )
}
