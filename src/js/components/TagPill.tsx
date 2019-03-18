import React from 'react'

interface TagPillProps {
  label: string
}

export const TagPill: React.SFC<TagPillProps> = props => {
  return <div className="tag-pill">{props.label}</div>
}

export default TagPill

//  return <div className="tag-pill">{props.label}</div>
