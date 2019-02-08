import React from 'react'
import Card from './Card'

interface CardColumnProps {
  name: string
  CARDS: any
}

export const CardColumn: React.SFC<CardColumnProps> = props => {
  return (
    <>
      <div className="card-column-wrapper">
        {props.CARDS.map((x: any) => (
          <Card id={x.id} label={x.label} assignee={x.assignee} />
        ))}
      </div>
    </>
  )
}

export default CardColumn

CardColumn.defaultProps = {}
