import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { EpicView } from './js/views/EpicView'
import { SetKeyModes } from './js/utils/KeyModes'
import { Components } from './js/views/Components'

import './scss/_base.scss'

export const App = () => {
  return (
    <div className="app__wrapper">
      <SetKeyModes />
      <Switch>
        <Route path="*" component={EpicView} />
      </Switch>
    </div>
  )
}

export default App
