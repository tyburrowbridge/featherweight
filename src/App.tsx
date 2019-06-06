import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { EpicView } from './js/views/EpicView'
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
