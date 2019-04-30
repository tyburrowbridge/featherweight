// react
import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

// components
import { EpicFullView } from './js/views/EpicFullView'
import { SetKeyModes } from './js/utils/KeyModes'
import { ModeBar } from './js/components/ModeBar'

// styles
import './scss/_base.scss'

class App extends Component {
  render() {
    return (
      <div className="app__wrapper">
        <EpicFullView />
        <SetKeyModes />
        <ModeBar currentMode="NORMAL_MODE" />
      </div>
    )
  }
}

export default App

// import { WavyLine } from './js/components/WavyLine'
