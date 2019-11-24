## scrollify-list
Super easy client-side infinite scroll for React.

Handy in a situation where you are needed to render a big chunk of data.

![Usage](https://raw.githubusercontent.com/anttikon/scrollify-list/master/misc/demo.gif)

## Install:
`npm install --save scrollify-list`

## How to use ([basic example](https://github.com/anttikon/scrollify-list/blob/master/examples/basic/)):
```javascript
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
```

## Configure
Property | Explanation
------------ | -------------
data | Your data! Array of something.
render | How do you want to render your data?
pageSize | How many rows in one page? Defaults to 15.

## Develop
1. `npm run dev`
2. `cd examples/basic/ && npm install && npm run start`
3. Go to http://localhost:1234/
4. Make changes to /src/index.js
5. ???
6. Profit! 😎✌️
