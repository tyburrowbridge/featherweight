import React from 'react'
import Card from './Card'

interface CardColumnProps {
  name: string
}

export const CardColumn: React.SFC<CardColumnProps> = props => {
  return (
    <>
      <h3>{props.name}</h3>
      <Card label="heck yes look at me." />
      <Card label="seriously cards rock" />
      <Card label="i love my little card life." />
      <Card label="this is just happiness upside down" />
      <Card />
    </>
  )
}

export default CardColumn

CardColumn.defaultProps = {
  name: 'Blank Column Name'
}
