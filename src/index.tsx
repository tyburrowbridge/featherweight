import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "./serviceWorker"

import { BrowserRouter } from "react-router-dom"

import Client from "aws-appsync"
import { ApolloProvider } from "react-apollo"
import { Rehydrated } from "aws-appsync-react"
import AppSync from "./AppSync"

import { Provider } from "react-redux"
import { createStore } from "redux"
import { appReducer } from "./store/reducers/reducer"

import App from "./App"
import "./index.css"

const store = createStore(appReducer)

const client = new Client({
  url: AppSync.aws_appsync_graphqlEndpoint,
  region: AppSync.aws_appsync_region,
  auth: {
    type: "API_KEY",
    apiKey: AppSync.aws_appsync_apiKey
  }
})

serviceWorker.unregister()
const WithProvider = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Rehydrated>
          <App />
        </Rehydrated>
      </Provider>
    </ApolloProvider>
  </BrowserRouter>
)

ReactDOM.render(<WithProvider />, document.getElementById("root"))
