import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ScrollifyList from '../../../src/index'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: App.getData(),
    }
  }

  static getData() {
    return Array(500)
      .fill(null)
      .map(() => ({
        id: Math.random().toString(36).substring(7),
        name: Math.random().toString(36).substring(7),
      }))
  }

  render() {
    return <ScrollifyList data={this.state.data} render={data => <h1 key={data.id}>{data.name}</h1>} />
  }
}

ReactDOM.render(<App />, document.getElementById('example'))
