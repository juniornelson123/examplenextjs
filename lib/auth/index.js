import jsCookie from 'js-cookie'
import jsHttpCookie from 'cookie'

import Router from 'next/router'

export function auth(req, res) {
  if (req) {
    const cookieJSON = jsHttpCookie.parse(req.headers.cookie)

    if (!cookieJSON.user) {

      res.redirect("/login")

      return false
    }

    return JSON.parse(cookieJSON.user)

  }else{
    const cookieJSON = jsCookie.get("user")

    if (!cookieJSON) {
      Router.push({
        pathname: "/login"
      })
      return false
    }

    return JSON.parse(cookieJSON)
  }
}

export function login(email, password) {
  jsCookie.set('user', { email: email})
  Router.push({
    pathname: "/"
  })
}

export function logout(){
  jsCookie.remove('user')

  Router.push({
    pathname: "/login"
  })
}
