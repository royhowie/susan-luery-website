import { Component } from 'react'
import { browserHistory } from 'react-router'
import { check, Match } from 'meteor/check'

const isStringWithLength = (str, len=0) => {
  check(str, String)
  check(str, Match.Where(_ => _.length > len))
}

export default class Login extends Component {
  componentWillMount () {
    document.title = 'login'
  }
  login (event) {
    event.preventDefault()

    let username = document.getElementById('username').value.trim()
    let password = document.getElementById('password').value

    try {
      check(username, isStringWithLength)
      check(password, isStringWithLength)
    } catch (err) {
      return browserHistory.push('/login?incorrect')
    }

    Meteor.loginWithPassword(username, password, (err) => {
      if (err) {
        console.log(err)
        return browserHistory.push('/login?incorrect')
      }
      return browserHistory.push('/')
      // return this.context.router.transitionTo.push('/')
    })
  }
  render () {
    return (
      <div className='row'>
        <div className='col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3'>
          <form onSubmit={this.login}>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                className='form-control'
                id='username'
                placeholder='Username'
                ref='username'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control'
                id='password'
                placeholder='Password'
                ref='password'
              />
            </div>
            <button type='submit' className='btn btn-primary col-md-12'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
