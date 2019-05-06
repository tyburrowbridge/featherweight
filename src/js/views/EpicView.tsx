import React from 'react'

import { EPICS_DATA } from '../../data/EPICS_DATA'
import { COLUMNS } from '../../data/COLUMNS'

import { EpicHeader } from '../components/EpicHeader'
import { Column } from '../components/Column'

export const EpicView = () => {
  return (
    <div className="epic-view__wrapper">
      <div className="epic-header__wrapper">
        <EpicHeader />
      </div>
      {COLUMNS.map((column: any, index: number) => {
        return <Column key={index} title={column} />
      })}
    </div>
  )
}
