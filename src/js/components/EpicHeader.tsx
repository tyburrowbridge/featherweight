import React from 'react'
import { EPIC_DATA } from '../../data/CARDS_DATA'

interface EpicHeaderProps {}

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

const epicLabel = EPIC_DATA[0].label
const epicStory = EPIC_DATA[0].story
