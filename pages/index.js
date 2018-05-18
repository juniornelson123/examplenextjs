import React, { Component } from 'react'
import ListCards from "../components/ListCards"

class Index extends Component {
  static getInitialProps(ctx){
    return {user: "junior"}
  }

  constructor(props){
    super(props)
    console.log(props)
  }

  render(){
    return (
      <ListCards />
    )
  }
}

export default Index
