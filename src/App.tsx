import * as React from "react"
// import { Route, Switch } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { Card } from "./js/components/Card"
import "./scss/_base.scss"

// import { EpicView } from "./js/views/EpicView"
// import { NewCardView } from "./js/views/NewCardView"
// import { CardListView } from "./js/views/CardListView"

import gql from "graphql-tag"
import { graphql, compose } from "react-apollo"
import { graphqlMutation } from "aws-appsync-react"
import { buildSubscription } from "aws-appsync"
import { BACKLOG } from "./data/COLUMNS"

const SubscribeToCards = gql`
  subscription {
    onCreateCard {
      id
      title
    }
  }
`
const CreateCard = gql`
  mutation($title: String!, $owner: AWSJSON!, $dateCreated: AWSTimestamp!) {
    createCard(
      input: { title: $title, owner: $owner, dateCreated: $dateCreated }
    ) {
      id
      title
      owner
      dateCreated
    }
  }
`

const ListCards = gql`
  query {
    listCards {
      items {
        id
        title
        owner
      }
    }
  }
`

const Item = (key: any, title: string, owner: any) => (
  <div key={key}>
    <Card
      key={key}
      id={298392}
      title={title}
      assignee={"roger"}
      owner={owner}
      dateCreated={"0/0/0"}
      status={BACKLOG}
      archived={false}
      tags={"undefined"}
    />
  </div>
)

type AppProps = {
  cards?: any
  createCard?: any
  subscribeToMore?: any
}

const App: React.FC<AppProps> = (props) => {
  useEffect(() => {
    props.subscribeToMore(buildSubscription(SubscribeToCards, ListCards), [
      ListCards
    ])
  })

  const [value, setValue] = useState("")

  const addCard = () => {
    const date = Date.now()
    const defaultUser = `{ "name": "tyburrowbridge" }`
    const card = { title: value, owner: defaultUser, dateCreated: date }

    if (value === "") {
      return
    }

    props.createCard(card)
    setValue("")
  }

  return (
    <div className="App">
      <div>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="add a card"
        />
        <button onClick={() => addCard()}> Add card Item </button>
      </div>
      <div>
        {props.cards.map((item: any, i: number) =>
          Item(i, item.title, item.owner)
        )}
      </div>
    </div>
  )
}

//export const App = () => {
//  return (
//    <div className="app__wrapper">
//      <Switch>
//        <Route exact path="/" component={EpicView} />
//        <Route exact path="/new-card" component={NewCardView} />
//        <Route exact path="/card-list" component={CardListView} />
//      </Switch>
//    </div>
//  )
//}

// TODO: replace app default export to compose the graphqlMutation jawn.
export default compose(
  graphqlMutation(CreateCard, ListCards, "Card"),
  graphql(ListCards, {
    options: {
      fetchPolicy: "cache-and-network"
    },
    props: (props: any) => ({
      subscribeToMore: props.data.subscribeToMore,
      cards: props.data.listCards ? props.data.listCards.items : []
    })
  })
)(App)
