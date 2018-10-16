## scrollify-list

Super easy scroll pagination for React.

![Usage](https://raw.githubusercontent.com/anttikon/scrollify-list/master/misc/demo.gif)

## Install:
`npm install --save scrollify-list`

## Use:
```javascript
import React, { Component } from 'react'
import ScrollifyList from 'scrollify-list'

export default class App extends Component {

  getData() {
    return Array(500).fill(null).map(() => ({id: Math.random().toString(36).substring(7), name: Math.random().toString(36).substring(7)}))
  }

  render() {
    return <ScrollifyList data={this.getData()} render={(data, index) => <h1 key={data.id}>{data.name}</h1>}/>
  }
}
```

## Configure

Property | Explanation
------------ | -------------
data | Your data! Array of something.
render | How do you want to render your data?
pageSize | How many rows in one page? Defaults to 15.

## Develop

1. Clone this repository (git clone git@github.com:anttikon/scrollify-list.git)
2. Build it: `npm run build`
3. Add it to your project: `npm install --save file:/path/to/scrollify-list`
4. ???
5. Profit! 😎✌️
