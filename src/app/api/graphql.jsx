import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
// import { NextRequest } from "next/server"

import typeDefs from "@/graphql/schemas"
import resolvers from "@/graphql/resolvers"
import allowCors from "@/utils/cors"

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})

const handler =
  startServerAndCreateNextHandler
  //  < NextRequest >
  (apolloServer,
  {
    context: async (req, res) => ({ req, res }),
  })

export default allowCors(handler)
