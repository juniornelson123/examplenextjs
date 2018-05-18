import React, { Component } from 'react'
import { auth, logout } from '../../lib/auth'

const withAuth = (ComposedComponent) => {
  class Layout extends Component {

    static async getInitialProps({req, res}){
      const user = auth(req, res)

      return {user: user}
    }

    constructor(props){
      super(props)
      console.log(props)
    }

    render(){
      return(
        <div>
          <h1>Usuario: {this.props.user ? this.props.user.email : "Nao autenticado"}</h1>
          {
            this.props.user
              ? (<button onClick={() => logout()}>sair</button>)
              : ''
          }
          <ComposedComponent />
        </div>
      )
    }
  }

  return Layout
}

export default withAuth
