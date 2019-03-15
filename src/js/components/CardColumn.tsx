import React from 'react'
import Card from './Card'

interface CardColumnProps {
  name: string
  cards: any
}

const getCardData = () => {}

const parseCardsByStatus = () => {}

export const CardColumn: React.SFC<CardColumnProps> = props => {
  return <div> card column will go here </div>
}

// export const CardColumn: React.SFC<CardColumnProps> = props => {
//   return (
//     <div className="card-column">
//       <div className="card-column__title"> {props.name} </div>
//       <div className="card-column__card-holder">
//         {props.cards.map((x: any, index: number) => (
//           <Card
//             key={index}
//             id={x.id}
//             label={x.label}
//             assignee={x.assignee}
//             tags={x.tags}
//             stage={x.stage}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

CardColumn.defaultProps = {
  name: 'New Column'
}
