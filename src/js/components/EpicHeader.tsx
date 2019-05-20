import React from 'react'
import { EPICS_DATA } from '../../data/EPICS_DATA'

const epicLabel = EPICS_DATA[0].label
const epicStory = EPICS_DATA[0].story

export const EpicHeader: React.FC = props => {
  return (
    <div className="epic-header__wrapper">
      <h1>{epicLabel}</h1>
      <h2 className="epic-story"> {epicStory}</h2>
    </div>
  )
}

export default EpicHeader
