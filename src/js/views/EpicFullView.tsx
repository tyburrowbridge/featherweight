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

export const EpicFullView = () => {
  return (
    <div>
      <div className="epic-columns__wrapper">
        <div className="epic-header">
          <EpicHeader />
        </div>
        {columnsArr.map((column: any, index: number) => {
          return <CardColumn title={column.name} />
        })}
      </div>
    </div>
  )
}

EpicFullView.defaultProps = {}

// <CardColumn name="Backlog" cards={CARDS_DATA} />
//
// const addColumnsToView = () => {
//   return condition1
//     ? value1
//     : condition2
//     ? value2
//     : condition3
//     ? value3
//     : value4
// }
