import React from 'react'

import { EPICS_DATA } from '../../data/EPICS_DATA'
import { COLUMNS } from '../../data/COLUMNS'

import { EpicHeader } from '../components/EpicHeader'
import { Column } from '../components/Column'
import { ModeBar } from '../components/ModeBar'

export const EpicView = () => {
  return (
    <div className="epic-view__wrapper">
      <EpicHeader />
      {columns}
    </div>
  )
}

const columns = COLUMNS.map((column: any, index: number) => {
  return <Column key={index} title={column} />
})
