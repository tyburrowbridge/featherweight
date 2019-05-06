import React from 'react'

interface WavyLineProps {
  visible: boolean
}

export const WavyLine: React.FC<WavyLineProps> = props => {
  console.log(`wavy visible :   ${props.visible}`)
  return (
    <div
      className={`wavy-line wavy-line${props.visible ? '--show' : '--hide'}`}
    />
  )
}
