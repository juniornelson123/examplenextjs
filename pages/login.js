import React, { Component } from 'react'
import { login } from '../lib/auth'

class Login extends Component {

  constructor(props){
    super(props)
    this.state = {email: "", password: ""}
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.submit = this.submit.bind(this)
  }

  changeEmail(e){
    this.setState({...this.state, email: e.target.value})
  }

  changePassword(e){
    this.setState({...this.state, password: e.target.value})
  }

  submit(){
    login(this.state.email, this.state.password)
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input value={this.state.email} onChange={this.changeEmail}/>
        <input value={this.state.password} onChange={this.changePassword}/>
        <button onClick={ this.submit }>Login</button>
      </div>
    )
  }
}

export default Login
