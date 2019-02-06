import React from 'react'
import { CARDS_DATA } from '../../data/CARDS_DATA'
import { Card } from './Card'

export const Cards = () => {
  return (
    <div className="cards-wrapper" asdfdasfsdffadsfd>
      {getAllCards}
    </div>
  )
}
export default Cards

const getAllCards = CARDS_DATA.map(card => {
  return <Card label={card.label} />
})
