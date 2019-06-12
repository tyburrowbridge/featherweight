// TODO: remove dead code
// TODO: refactor to bring in data from asw or make into HOC
import React from "react"
import Card from "./Card"
// import data from '../../data/CARDS.json'

//interface CardObj {
//[key: string]: any
//id: number
//title: string
//assignee: string
//creator: string
//dateCreated: string
//column: string
//tags: any
//}

//const cards: CardObj = data.cards as any

type CardColumnProps = {
  title: string
}

const addCardColumns = (column: string) => <div> refactoring </div>

export const CardColumn: React.FC<CardColumnProps> = (props) => {
  return (
    <div className="card-column">
      <div className={`card-column__${props.title}`}>
        <div className="card-column__card-holder" />
      </div>
    </div>
  )
}
export default CardColumn

CardColumn.defaultProps = {
  title: "New Column"
}
