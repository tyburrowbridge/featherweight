// imports > react
import * as React from 'react'
import { Component } from 'react'
import { useState } from 'react'

// imports > components
import { Header } from './js/components/Header'
import { Footer } from './js/components/Footer'
import { EpicFullView } from './js/views/EpicFullView'
// import { DetectKeyPress } from './js/utils/DetectKeyPress'
// <DetectKeyPress targetKey={72} />
import { ProgressBar } from './js/components/ProgressBar'

// styles
import './scss/_base.scss'

class App extends Component {
  render() {
    return (
      <div className="app">
        <ProgressBar complete={2} total={10} />
        <EpicFullView />
      </div>
    )
  }
}

export default App
