import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import Routes from './Routes.jsx'

Meteor.startup(() => {
  render(<Routes/>, document.getElementById('app'))
})
