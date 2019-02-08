import React from 'react'
import { EPICS_DATA } from '../../data/EPICS_DATA'

interface EpicColumnProps {}

export const EpicColumn: React.SFC<EpicColumnProps> = props => {
  return (
    <>
      <h3>{EPICS_DATA[0].label}</h3>
      <span className="epic-story"> {EPICS_DATA[0].story}</span>
    </>
  )
}

export default EpicColumn

EpicColumn.defaultProps = {}
