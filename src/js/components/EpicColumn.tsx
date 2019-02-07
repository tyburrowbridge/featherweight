import React from 'react'
import { EPIC_DATA } from '../../data/CARDS_DATA'

interface EpicColumnProps {
  label: string
  story: string
}

export const EpicColumn: React.SFC<EpicColumnProps> = props => {
  return (
    <>
      <h3>{epicLabel}</h3>
      <span className="epic-story"> {epicStory}</span>
    </>
  )
}

export default EpicColumn

EpicColumn.defaultProps = {
  label: 'no epic defined',
  story: 'no user story defined'
}

const epicLabel = EPIC_DATA[0].label
const epicStory = EPIC_DATA[0].story
