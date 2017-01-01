import { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App.jsx'
import Index from './components/Index.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import News from './components/News.jsx'
import Contact from './components/Contact.jsx'
import Login from './components/Login.jsx'
import Gallery from './components/Gallery.jsx'
import NotFound from './components/NotFound.jsx'

// const { Route, IndexRoute, history } = ReactRouter
// import { Router, Route, Link, browserHistory } from 'react-router'

export default class Routes extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Index}/>
          <Route path='home' component={Index}/>
          <Route path='about' component={About}/>
          <Route path='portfolio' component={Portfolio}/>
          <Route path='news' component={News}/>
          <Route path='contact' component={Contact}/>
          <Route path='login' component={Login}/>
          <Route path='gallery/:id' component={Gallery}/>
        </Route>
        <Route path='*' component={NotFound}/>
        {/*
          <Route path='/app' component={AuthenticatedApp}>
            <IndexRoute component={AuthenticatedAppIndex}/>
            {/* Additional routes requiring authentication go here /}
          </Route>
        */}
      </Router>
    )
  }
}
