import Router from 'next/router'

export function redirect(path){
  Router.push({
    pathname: path
  })
}
