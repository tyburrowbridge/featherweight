import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

import { EpicView } from './js/views/EpicView'

import { SetKeyModes } from './js/utils/KeyModes'
import { ModeBar } from './js/components/ModeBar'
import { Components } from './js/views/Components'

import './scss/_base.scss'

class App extends Component {
  render() {
    return (
      <div className="app__wrapper">
        <EpicView />
      </div>
    )
  }
}

export default App

// import { WavyLine } from './js/components/WavyLine'
