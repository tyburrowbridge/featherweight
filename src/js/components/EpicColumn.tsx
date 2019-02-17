import React from 'react'
import { EPICS_DATA } from '../../data/EPICS_DATA'
import { CARDS_DATA } from '../../data/CARDS_DATA'
import { EpicHeader } from './EpicHeader'
import { CardColumn } from './CardColumn'

interface EpicColumnProps {}

export const EpicColumn: React.SFC<EpicColumnProps> = props => {
  return (
    <div>
      <EpicHeader />
      <CardColumn name="Backlog" CARDS={CARDS_DATA} />
      <h3>{EPICS_DATA[0].label}</h3>
      <span className="epic-story"> {EPICS_DATA[0].story}</span>
    </div>
  )
}

export default EpicColumn

EpicColumn.defaultProps = {}
