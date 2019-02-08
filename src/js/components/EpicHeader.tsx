import React from 'react'
import { EPICS_DATA } from '../../data/EPICS_DATA'

interface EpicHeaderProps {}

const epicLabel = EPICS_DATA[0].label
const epicStory = EPICS_DATA[0].story

export const EpicHeader: React.SFC<EpicHeaderProps> = props => {
  return (
    <>
      <h3>{epicLabel}</h3>
      <span className="epic-story"> {epicStory}</span>
    </>
  )
}

export default EpicHeader

EpicHeader.defaultProps = {
  label: 'no epic defined',
  story: 'no user story defined'
}
