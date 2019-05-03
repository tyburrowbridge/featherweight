import React from 'react'
import { EPICS_DATA } from '../../data/EPICS_DATA'
import { EpicHeader } from '../components/EpicHeader'
import { CardColumn } from '../components/CardColumn'

const columnsArr = [
  { name: 'backlog' },
  { name: 'working' },
  { name: 'ready' },
  { name: 'done' }
]

export const EpicView = () => {
  return (
    <div className="epic-view__wrapper">
      <div className="epic-columns__wrapper">
        <div className="epic-header">
          <EpicHeader />
        </div>
        {columnsArr.map((column: any, index: number) => {
          return <CardColumn key={index} title={column.name} />
        })}
      </div>
    </div>
  )
}
