import React from 'react'

interface TagPillProps {
  label: string
}

export const TagPill: React.SFC<TagPillProps> = props => {
  const label = props.label
  console.log('tag pill: ' + label)
  return <div className="tag-pill">{label}</div>
}

export default TagPill
