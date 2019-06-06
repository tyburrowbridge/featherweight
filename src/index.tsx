import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "./serviceWorker"

import { BrowserRouter } from "react-router-dom"

// TODO: install aws-appsync
// import Client from 'aws-appsync'
// import { ApolloProvider } from 'react-apollo'
// import { Rehydrated } from 'aws-appsync-react'
// import AppSync from './AppSync'

import { Provider } from "react-redux"
import { createStore } from "redux"
import { appReducer } from "./store/reducers/reducer"

import { App } from "./App"

import "./index.css"

const store = createStore(appReducer)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
)

serviceWorker.unregister()
