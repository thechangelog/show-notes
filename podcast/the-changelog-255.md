- <strike>Learn GraphQL</strike> [How to GraphQL](https://www.howtographql.com)
- [Learn Apollo](https://www.learnapollo.com/)
- [Learn Relay](https://www.learnrelay.org/)
- [GraphQL Playground](http://graphql.nodaljs.com/)
- [GraphQL.org](http://graphql.org/)
- [Facebook's announcement post for GraphQL](https://code.facebook.com/posts/1691455094417024/graphql-a-data-query-language/)
- [Graphcool - Serverless GraphQL Backend](https://www.graph.cool/) - Developer platform for building serverless graphql backends
 - [Graphcool hit #1 on HackerNews](https://news.ycombinator.com/item?id=14350129) when it launched
- [GraphQL Radio](https://graphqlradio.com/) - a podcast covering all things GraphQL
- [GraphQL-Europe](https://graphql-europe.org/) - Europe’s first GraphQL conference
- [Reinventing Authorization: GraphQL Permission Queries](https://blog.graph.cool/reinventing-authorization-graphql-permission-queries-f2bd041bcd76)
- [Serverless GraphQL Backend architecture](https://www.graph.cool/docs/blog/introducing-the-serverless-graphql-backend-architecture-ahde7paig2/)
- [Why GraphQL is the future](https://dev-blog.apollodata.com/why-graphql-is-the-future-3bec28193807)
- [Facebook's original draft RFC specification for GraphQL](https://facebook.github.io/graphql/)

---

From [The GitHub GraphQL API](https://githubengineering.com/the-github-graphql-api/) post on the GitHub Engineering blog:

> The REST API is responsible for over 60% of the requests made to our database tier. This is partly because, by its nature, hypermedia navigation requires a client to repeatedly communicate with a server so that it can get all the information it needs. Our responses were bloated and filled with all sorts of `*_url` hints in the JSON responses to help people continue to navigate through the API to get what they needed. Despite all the information we provided, we heard from integrators that our REST API also wasn’t very flexible. It sometimes required two or three separate calls to assemble a complete view of a resource. It seemed like our responses simultaneously sent too much data and didn’t include data that consumers needed.