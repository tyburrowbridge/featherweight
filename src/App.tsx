// imports > react
import * as React from 'react'
import { Component } from 'react'

// imports > components
import { Header } from './js/components/Header'
import { Footer } from './js/components/Footer'
import { CardColumn } from './js/components/CardColumn'

// imports > styles
// import './App.scss'
import './scss/_base.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Shifty. </h1>
        <CardColumn name="Backlog" />
      </div>
    )
  }
}

export default App
