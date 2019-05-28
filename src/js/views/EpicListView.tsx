import React from 'react'

type EpicListViewProps = {
  epicSelected: number
}

export const HelloComponent: React.FC<EpicListViewProps> = props => {
  return <div className="hc__wrapper">Epic List View</div>
}
