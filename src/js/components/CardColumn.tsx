import React from 'react'
import Card from './Card'
import data from '../../data/CARDS.json'

interface CardColumnProps {
  title: string
}

interface CardsObj {
  [key: string]: any
  id: number
  title: string
  assignee: string
  creator: string
  dateCreated: string
  stage: string
  tags: any
}

const cards: CardsObj = data.cards as any

const addCardstoColumn = (column: string) =>
  cards
    .filter((card: any) => {
      return card.stage === column
    })
    .map((card: any, index: number) => (
      <Card
        key={index}
        id={card.id}
        title={card.title}
        assignee={card.assignee}
        creator={card.creator}
        dateCreated={card.dateCreated}
        stage={card.stage}
        tags={card.tags}
      />
    ))

export const CardColumn: React.SFC<CardColumnProps> = props => {
  return (
    <div className="card-column">
      <div className={`card-column__${props.title}`}>
        <div className="card-column__card-holder">
          {addCardstoColumn(props.title)}
        </div>
      </div>
    </div>
  )
}
export default CardColumn

CardColumn.defaultProps = {
  title: 'New Column'
}

//<div className="card-column__title"> {props.title} </div>
//    card.stage == column ? (
//     <Card
//       key={index}
//       id={card.id}
//       title={card.title}
//       assignee={card.assignee}
//       creator={card.creator}
//       dateCreated={card.dateCreated}
//       stage={card.stage}
//       tags={card.tags}
//     />
//   ) : (
//     <div> fucks </div>
//   )
// })

//
//
//
//
//
