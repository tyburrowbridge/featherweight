// react
import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

// components
import { Header } from './js/components/Header'
import { Footer } from './js/components/Footer'
import { EpicFullView } from './js/views/EpicFullView'
import { ProgressBar } from './js/components/ProgressBar'
import { DetectKeyPress } from './js/utils/DetectKeyPress'

// styles
import './scss/_base.scss'

export interface AppProps {}

interface AppStateProps extends AppProps {
  mode: string
}

interface AppDispatchProps extends AppProps {
  switchMode: (action: any) => void
}

class App extends Component<AppProps> {
  render() {
    return (
      <div className="app__wrapper">
        <EpicFullView />
        <DetectKeyPress
          targetKey={78}
          actionType={'NORMAL_MODE'}
          mode={this.props.normalMode}
        />
        <DetectKeyPress
          targetKey={73}
          actionType={'INSERT_MODE'}
          mode={insertMode}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return { mode: state.mode }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    normalMode: () => dispatch({ type: 'NORMAL_MODE' }),
    insertMode: () => dispatch({ type: 'INSERT_MODE' })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

//<EpicFullView />
// import { DetectKeyPress } from './js/utils/DetectKeyPress'
// <DetectKeyPress targetKey={72} />
// import { WavyLine } from './js/components/WavyLine'
