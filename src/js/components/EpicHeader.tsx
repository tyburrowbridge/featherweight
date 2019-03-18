import React from 'react'
import { EPICS_DATA } from '../../data/EPICS_DATA'

interface EpicHeaderProps {}

const epicLabel = EPICS_DATA[0].label
const epicStory = EPICS_DATA[0].story

export const EpicHeader: React.FC<EpicHeaderProps> = props => {
  return (
    <div className="epic-header__wrapper">
      <h1>{epicLabel}</h1>
      <h2 className="epic-story"> {epicStory}</h2>
    </div>
  )
}

export default EpicHeader

EpicHeader.defaultProps = {
  label: 'no epic defined',
  story: 'no user story defined'
}

// const tinySquare = <div className="tiny-square">hi.</div>
