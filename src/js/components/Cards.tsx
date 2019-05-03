import React from 'react'
import data from '../../data/CARDS.json'
import Card from './Card'

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

interface CardsProps = {}

export const Cards = () => {
 return()  
}
