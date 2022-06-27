import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q3rwd82uwt01xs056b92um/master',
    cache: new InMemoryCache()
})