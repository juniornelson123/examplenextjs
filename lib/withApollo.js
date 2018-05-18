// lib/withApollo.js
import withApollo from 'next-with-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export default withApollo({
  client: () => ({
    cache: new InMemoryCache()
  }),
  link: {
    http: new HttpLink({
      uri: "http://localhost:4000/graphiql"
    })
  }
})
