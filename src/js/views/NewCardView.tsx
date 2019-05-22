import React from 'react'
import { useState } from 'react'
import { ProgressBar } from '../components/ProgressBar'
import { Percent, Difference } from '../utils/Math'

const maxCharacters = 120

type NewCardViewProps = {
  creatorID: number
}

const Editor: React.FC = props => {
  const [value, setValue] = useState('') // keep value of textarea
  const [count, setCount] = useState(0) // character count

  const handleChange = (event: any) => {
    setValue(event.value)
    setCount(event.target.value.length)
  }
  return (
    <div>
      <ProgressBar progress={count} limit={maxCharacters} width={300} />
      <div className="new-card__charCount">
        : {Difference(maxCharacters, count)}
      </div>
      <form id="noter-save-form" method="POST">
        <textarea
          id="noter-text-area"
          className="new-card-textarea"
          name="textarea"
          value={value}
          placeholder={''}
          onChange={handleChange}
          autoFocus={true}
          maxLength={maxCharacters}
          rows={6}
        />
      </form>
    </div>
  )
}

export const NewCardView: React.FC<NewCardViewProps> = props => {
  return (
    <div className="new-card__wrapper">
      <Editor />
    </div>
  )
}
