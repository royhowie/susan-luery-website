import { Component } from 'react'
import Portfolio from './Portfolio.jsx'

export default class Index extends Component {
  componentWillMount () {
    document.title = 'Susan Luery Studios'
  }

  render () {
    return (
      <div>
        <img className='col-12' src='/img/home.jpg'/>
        <Portfolio/>
      </div>
    )
  }
}
