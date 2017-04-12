import React from 'react'

// ES6 Class Component with export
export default class Home extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <h1>Hello, {this.props.name}!!!!!</h1>
      </div>
    )
  }
}

// export default Home
