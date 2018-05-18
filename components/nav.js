import React, { Component } from 'react'
import Link from "next/link";

class Nav extends Component{
  render(){
    return (
      <nav>
        <ul>
          <li>
            <Link prefetch href="/"><a>Home</a></Link>
          </li>
          <li>
            <Link prefetch href="/login"><a>Login</a></Link>
          </li>
          <li>
            <Link prefetch href="/register"><a>Register</a></Link>
          </li>
        </ul>
      </nav>
    )
  }
}



export default Nav
