import * as React from "react"
import { Route, Switch } from "react-router-dom"

import { EpicView } from "./js/views/EpicView"
import { NewCardView } from "./js/views/NewCardView"

import gql from "graphql-tag"
import { graphql, compose } from "react-apollo"
import { graphqlMutation } from "aws-appsync-react"
import { buildSubscription } from "aws-appsync"

import "./scss/_base.scss"

const SubscribeToTodos = gql`
  subscription {
    onCreateTodo {
      id
      title
      completed
    }
  }
`
// TODO: use reference to implement cards
// const Item = (key: any, title: any) => (
//   <div key={key}>
//     <p>{title}</p>
//   </div>
// )
//
// const App: React.FC<AppProps> = (props) => {
//   useEffect(() => {
//     props.subscribeToMore(buildSubscription(SubscribeToTodos, ListTodos), [
//       ListTodos
//     ])
//   })
//
//   const [value, setValue] = useState("")
//
//   const addTodo = () => {
//     const todo = { title: value, completed: false }
//
//     if (value === "") {
//       return
//     }
//
//     props.createTodo(todo)
//     setValue("")
//   }
//
//   return (
//     <div className="App">
//       <div>
//         <input
//           onChange={(e) => setValue(e.target.value)}
//           value={value}
//           placeholder="add a todo"
//         />
//         <button onClick={() => addTodo()}> Add Todo Item </button>
//       </div>
//       <div>
//         {props.todos.map((item: any, i: number) => Item(i, item.title))}
//       </div>
//     </div>
//   )
// }

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

// TODO: replace app default export to compose the graphqlMutation jawn.
// export default compose(
//   graphqlMutation(CreateTodo, ListTodos, "Todo"),
//   graphql(ListTodos, {
//     options: {
//       fetchPolicy: "cache-and-network"
//     },
//     props: (props: any) => ({
//       subscribeToMore: props.data.subscribeToMore,
//       todos: props.data.listTodos ? props.data.listTodos.items : []
//     })
//   })
// )(App)
