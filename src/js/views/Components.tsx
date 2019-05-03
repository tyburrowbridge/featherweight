import React from 'react'
import { Card } from '../components/Card'

export const Components = () => {
  return (
    <div className="components__wrapper">
      <div className="components__card-row">
        <Card
          id={23}
          title={'As a user I want to be able to fly in order to see the world'}
          creator={'Ty Burrowbridge'}
          assignee={'Ken Keniff'}
          dateCreated={'10-10-10'}
          tags={['important', 'blocked']}
          column={'working'}
        />
      </div>
    </div>
  )
}
