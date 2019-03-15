import React from 'react'
import { EPICS_DATA } from '../../data/EPICS_DATA'
//import { CARDS_DATA } from '../../data/CARDS_DATA'
import { EpicHeader } from '../components/EpicHeader'
import { CardColumn } from '../components/CardColumn'
import data from '../../data/CARDS.json'

interface CardObj {
  // id: number
  // title: string
  // creator: string
  assignee: string
  // dateCreated: string
  // tags: string
  // column: string
}

export const EpicFullView = () => {
  const card: CardObj = data as any

  console.log('card: ' + data.assignees)

  return (
    <div>
      <EpicHeader />
    </div>
  )
}

EpicFullView.defaultProps = {}

// <CardColumn name="Backlog" cards={CARDS_DATA} />
