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

// const WavyLineSVG = (cordinates: string) => {
//   return (
//     <div>
//       <svg>
//         <path d={cordinates} />
//       </svg>
//     </div>
//   )
// }
//
// let xs: number[] = [0]
// for (let i = 0; i <= 500; i++) {
//   xs.push(i)
// }
//
// let t = 0
//
// const animate = () => {
//   let points = xs.map(x => {
//     let y = 200 + 100 * Math.sin(x / 20)
//     return [x, y]
//   })
//
//   let path =
//     'M' +
//     points
//       .map((p: any) => {
//         return p[0] + ',' + p[1]
//       })
//       .join(' L')
//
//   t += 0.5
//
//   requestAnimationFrame(animate)
// }
//
// animate()
