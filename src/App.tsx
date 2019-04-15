// react
import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

// components
import { EpicFullView } from './js/views/EpicFullView'
import { DetectKeyPress } from './js/utils/DetectKeyPress'
import { ModeBar } from './js/components/ModeBar'

// styles
import './scss/_base.scss'

export interface AppProps {}

interface AppStateProps {
  mode: string
}

interface AppDispatchProps {
  setMode: () => {}
}

class App extends Component<AppDispatchProps> {
  render() {
    return (
      <div className="app__wrapper">
        <EpicFullView />
        <ModeBar currentMode="xxx" />
        <DetectKeyPress
          targetKey={78}
          setMode={this.props.setMode}
          mode={Mode.normal}
        />
      </div>
    )
  }
}

export enum Mode {
  normal = 'normal-mode',
  visual = 'visual-mode',
  insert = 'insert-mode'
}

const normalMode = () => ({ type: Mode.normal })
const visualMode = () => ({ type: Mode.visual })
const insertMode = () => ({ type: Mode.insert })

const mapStateToProps = (state: any) => {
  return { mode: state.mode }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    //setMode: () => dispatch(normalMode)
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
