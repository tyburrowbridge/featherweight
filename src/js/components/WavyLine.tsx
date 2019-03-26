import React from 'react'

export const WavyLine = () => {
  return <div className="wavy-line">{WavyLineSVG}</div>
}
export default WavyLine

const WavyLineSVG = (cordinates: string) => {
  return (
    <div>
      <svg>
        <path d={cordinates} />
      </svg>
    </div>
  )
}

// xs array pre population
let xs: number[] = [0]
for (let i = 0; i <= 500; i++) {
  xs.push(i)
}

// time variable
let t = 0

const animate = () => {
  let points = xs.map(x => {
    let y = 200 + 100 * Math.sin(x / 20)
    return [x, y]
  })

  let path =
    'M' +
    points
      .map((p: any) => {
        return p[0] + ',' + p[1]
      })
      .join(' L')

  t += 0.5

  requestAnimationFrame(animate)
}

animate()

// let line = <SVGElement>document
//     .querySelector('.wavy-line')
//     .setAttribute('d', path)
