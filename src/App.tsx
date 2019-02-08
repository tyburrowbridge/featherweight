// imports > react
import * as React from 'react'
import { Component } from 'react'

// imports > components
import { Header } from './js/components/Header'
import { Footer } from './js/components/Footer'
import { CardColumn } from './js/components/CardColumn'
import { EpicHeader } from './js/components/EpicHeader'
import { CARDS_DATA } from './data/CARDS_DATA'
import { EPICS_DATA } from './data/EPICS_DATA'

// styles
import './scss/_base.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <EpicHeader />
        <CardColumn name="Backlog" CARDS={CARDS_DATA} />
      </div>
    )
  }
}

export default App
