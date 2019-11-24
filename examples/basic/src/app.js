import React from 'react'
import ReactDOM from 'react-dom'
import ScrollifyList from 'scrollify-list'

const generateData = () =>
  Array(500)
    .fill(null)
    .map(() => ({
      id: Math.random()
        .toString(36)
        .substring(7),
      name: Math.random()
        .toString(36)
        .substring(7),
    }))

const App = () => (
  <ScrollifyList
    data={generateData()}
    render={data => <h1 key={data.id}>{data.name}</h1>}
  />
)

ReactDOM.render(<App />, document.getElementById('example'))
