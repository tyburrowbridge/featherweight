import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { EpicView } from './js/views/EpicView'
import { Components } from './js/views/Components'
import { NewCardView } from './js/views/NewCardView'

import './scss/_base.scss'

export const App = () => {
  return (
    <div className="app__wrapper">
      <Switch>
        <Route exact path="/" component={EpicView} />
        <Route exact path="/new-card" component={NewCardView} />
      </Switch>
    </div>
  )
}

export default App
