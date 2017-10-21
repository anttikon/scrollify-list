import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Waypoint from 'react-waypoint'

export default class ScrollifyList extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      visibleRows: 0,
    }
  }

  componentWillMount() {
    if (this.props.data) {
      this.resetComponent(this.props.data)
    }
  }

  componentWillReceiveProps(nextProps) {
    const newData = JSON.stringify(this.state.data) !== JSON.stringify(nextProps.data)
    if (newData) {
      this.resetComponent(nextProps.data)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const newRows = nextState.visibleRows !== this.state.visibleRows
    const newData = JSON.stringify(this.state.data) !== JSON.stringify(nextProps.data)
    return newRows || newData
  }

  getData(visibleRows) {
    return this.state.data.slice(0, visibleRows)
  }

  resetComponent(data) {
    this.lastRenderedIndex = undefined
    const { pageSize } = this.props
    this.setState({
      pageSize,
      data: data || [],
      visibleRows: pageSize,
    })
  }

  handleScroll(index) {
    if (this.state.data.length > 0 && index === undefined && this.lastRenderedIndex !== undefined) {
      this.setState({ visibleRows: this.state.visibleRows + this.state.pageSize })
    } else if (this.state.data.length > 0 && (!this.lastRenderedIndex || index > this.lastRenderedIndex)) {
      this.lastRenderedIndex = index
      this.setState({ visibleRows: this.state.visibleRows + this.state.pageSize })
    }
  }

  render() {
    const visibleData = this.getData(this.state.visibleRows)
    return (
      <div>
        {visibleData.map((result, index) => (
          <span key={index}>
            {this.props.render(result, index)}
            {index % this.state.pageSize === 0 ? <Waypoint onEnter={() => this.handleScroll(index)} /> : null}
          </span>
        ))}
        <Waypoint onEnter={() => this.handleScroll()} />
      </div>
    )
  }
}

ScrollifyList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  pageSize: PropTypes.number,
  render: PropTypes.func.isRequired,
}

ScrollifyList.defaultProps = {
  data: [],
  pageSize: 15,
}
