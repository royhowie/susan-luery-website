import React from 'react'
import NavBar from './NavBar.jsx'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar/>
        <div className='container'>
          {/* Views will be rendered here */}
          {this.props.children}
        </div>
      </div>
    )
  }
}
