import React from 'react'
import Card from './Card'

interface CardColumnProps {
  name: string
  CARDS: any
}

export const CardColumn: React.SFC<CardColumnProps> = props => {
  return (
    <div className="card-column-wrapper">
      <div className="card-column__title"> {name}</div>
      {props.CARDS.map((x: any, index: number) => (
        <Card
          key={index}
          id={x.id}
          label={x.label}
          assignee={x.assignee}
          tags={x.tags}
        />
      ))}
    </div>
  )
}

CardColumn.defaultProps = {
  name: 'New Column'
}
