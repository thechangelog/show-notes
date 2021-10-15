- [Pino](https://getpino.io/#/)
- [Fastify](https://www.fastify.io/)
- [JS Party 103 - You're probably using streams](https://changelog.com/jsparty/103)
- [Hiring at Nearform](https://www.nearform.com/careers/)
- [Maven](https://maven.apache.org/what-is-maven.html)
- [npm](https://www.npmjs.com/)
- [koa](https://koajs.com)
- [Find my way - router](https://github.com/delvedor/find-my-way)
- [NestJS and Fastify](https://docs.nestjs.com/techniques/performance#performance-fastify)
- [Adventures in Nodeland newsletter](https://nodeland.dev/)
- [Deno](https://deno.land)
- [10 things I regret about Node.js](https://www.youtube.com/watch?v=M3BM9TB-8yA)
- [Node Todo](https://www.nodetodo.org)
- [NodeConf Remote - October 18-21, 2021](https://www.nodeconfremote.com)
- [Avvio](https://github.com/fastify/avvio)

```javascript
// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
// Declare a route
fastify.get('/', (request, reply) => { reply.send({ hello: 'world' }) })
// Run the server!
fastify.listen(3000, (err) => { if (err) { fastify.log.error(err) process.exit(1) } })
```