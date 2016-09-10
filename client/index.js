import React, { Component } from 'react'
import { render } from 'react-dom'

const rootEl = document.querySelector('#root')

class App extends Component {
  constructor() {
    super()
    guestLogin = this.guestLogin.bind(this)
  }

  guestLogin() {
    
  }

  render() {
    return (
      <div>
        <input />
        <input type="password" />
        <button onClick={guestLogin()}>Guest Login</button>
      </div>
    )
  }
}


render(<App />, rootEl)
