import React, { Component } from 'react'
import { render } from 'react-dom'

const rootEl = document.querySelector('#root')

class App extends Component {
  constructor() {
    super()
    this.guestLogin = this.guestLogin.bind(this)
    this.login = this.login.bind(this)
    this.state = {
      username: '',
      password: ''
    }
  }

  login() {
    console.log('Logged in!')
  }

  guestLogin(username, password) {
    if (username.length === 0 && password.length === 0) {
      this.login()
    } else if (username.length === 0) {
      this.setState({password: this.state.password + password[0]});
      setTimeout(() => this.guestLogin(username, password.slice(1)), 50)
    } else {
      this.setState({username: this.state.username + username[0]});
      setTimeout(() => this.guestLogin(username.slice(1), password), 50)
    }
  }

  render() {
    return (
      <div>
        <input value={this.state.username} />
        <input value={this.state.password} type="password" />
        <button onClick={() => this.guestLogin('guest', 'password')}>Guest Login</button>
      </div>
    )
  }
}


render(<App />, rootEl)
