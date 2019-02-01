// imports > react
import * as React from 'react'
import { Component } from 'react'

// imports > components
import { Header } from './js/components/Header'
import { Footer } from './js/components/Footer'
import { CardColumn } from './js/components/CardColumn'

// imports > styles
import './App.scss'
import './scss/views/_app.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CardColumn name="Backlog" />
        <Footer />
      </div>
    )
  }
}

export default App
