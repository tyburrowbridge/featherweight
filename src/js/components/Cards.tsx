import React from 'react'
import data from '../../data/CARDS.json'

type CardObj = {
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

export const Cards = () => {
  return <div />
}
