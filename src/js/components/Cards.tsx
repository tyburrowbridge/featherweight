import React from 'react'
import {CARDS_DATA} from '../../data/CARDS_DATA'
import {Card} from './Card'

export const Cards = () => {
  return (
      <div>
        {listAllCards}
      </div>
  )
}
export default Cards

const cardLabel = () => {
    CARDS_DATA.map(card => {card.label})
}

const listAllCards = () => {
   CARDS_DATA.map(card => { <Card label={card.label}}) 
}

