* [NoSQL smackdown](http://thechangelog.com/post/457259567/episode-0-1-8-nosql-smackdown), live from SXSW 2010.
* Are you [web scale](http://highscalability.com/blog/2010/9/5/hilarious-video-relational-database-vs-nosql-fanbois.html)?
* Drop us a [ping@thechangelog.com](mailto:ping@thechangelog.com) and let us know who you want to get on The Changelog
* [Andy Gross](http://twitter.com/#!/argv0) VP of Engineering at [Basho](http://www.basho.com/), the company behind Riak.
* [Mark Phillips](http://www.twitter.com/pharkmillups) Community Manager at Basho AKA * [@pharkmillups](http://www.twitter.com/pharkmillups)
* [John Nunemaker](http://twitter.com/jnunemaker) of [Ordered List](http://orderedlist.com/) and [MongoMapper](https://github.com/jnunemaker/mongomapper) fame
* Riak is now available as a [binary download](https://wiki.basho.com/display/RIAK/Installation+and+Setup)
* [Bitcask](https://github.com/basho/bitcask), the new backend for Riak
* [Riak key value store](https://github.com/basho/riak), decentralized datastore from Basho Technologies
* [Riak Search](https://github.com/basho/riak_search), full-text search engine based on Riak
* Riak [buckets](https://wiki.basho.com/display/RIAK/Riak+Glossary#RiakGlossary-Bucket), container and keyspace for data stored in Riak
* Riak KVS buckets can be [automatically searchable](https://wiki.basho.com/display/RIAK/Riak+Search) by installing the Search pre-commit hook
* Riak [supports](https://wiki.basho.com/display/RIAK/Riak+Search+-+Querying#RiakSearch-Querying-QueryingviatheSolrInterface) an [Apache SOLR](http://lucene.apache.org/solr/) interface
* [Sean Cribbs](http://twitter.com/#!/seancribbs) made some waves with [Ripple](https://github.com/seancribbs/ripple)
* Ruby, Python, Node.js are the [biggest adopters](https://wiki.basho.com/display/RIAK/Client+Libraries+and+Community+Code) of Riak
* Riak aims to [scale both up and down](https://wiki.basho.com/display/RIAK/Benchmarking+with+Basho+Bench). [Adding a node](https://wiki.basho.com/display/RIAK/Command-Line+Tools#Command-LineTools-join) adds a linear increase in throughput and storage capacity. 50 nodes run easily on a laptop.
* Riak nodes are [truly decentralized](https://wiki.basho.com/display/RIAK/How+Things+Work#HowThingsWork-TheRing), no node is special
* Riak [compares to Cassandra](https://wiki.basho.com/display/RIAK/Riak+Compared+to+Cassandra) and [Voldemort](http://project-voldemort.com/)
* Riak has built-in JavaScript [map reduce](https://wiki.basho.com/display/RIAK/MapReduce) but unlike [Couch](http://couchdb.apache.org/), it’s more an ad hoc approach.
* Andy explains Riak’s [link walking](https://wiki.basho.com/display/RIAK/Links) or _bucket-key-tag_ relationships between objects.
* Riak now has two interfaces, the original [REST HTTP interface](https://wiki.basho.com/display/RIAK/REST+API), and a new [protocol buffers interface](https://wiki.basho.com/display/RIAK/Erlang+Client+PBC), a faster binary interface
* Eric Brewer, [a Basho board member](http://www.basho.com/Eric-Brewer-Joins-Board-of-Directors-of-Basho.html), and [his cap theorem](http://www.julianbrowne.com/article/viewer/brewers-cap-theorem)
* [Bitcask](http://blog.basho.com/2010/04/27/hello,-bitcask/) is an append-only file format where the keys are stored in memory for ultra fast lookups.
* [InnoStore](https://github.com/basho/innostore), the original Riak backend
* [John Muellerleile](http://twitter.com/jrecursive), author of the [popular NoSQL cartoon about distributed map reduce in Erlang](http://howfuckedismydatabase.com/nosql/)
* [Apache Lucene query syntax](http://lucene.apache.org/java/2_4_0/queryparsersyntax.html) a growing standard for search
* The move from [BitBucket](http://bitbucket.org/) to [GitHub](http://github.com) was ultimately about community, not about DVCS
* The [THANKS](https://github.com/basho/riak/blob/master/THANKS) file lists many Riak community contributors
* [Harmony](http://get.harmonyapp.com/) - the [MongoDB](http://mongodb.org)-powered hosted CMS from [Ordered List](http://orderedlist.com)
* Mozilla [runs several Riak clusters](http://blog.mozilla.com/data/2010/05/18/riak-and-cassandra-and-hbase-oh-my/) to log data from their [Test Pilot project](https://testpilot.mozillalabs.com/)
* [Francisco Treacy](http://franciscotreacy.com/) uses Riak in [WideScript](http://widescript.com/), “an innovative app that helps you focus and interact with your texts — on your desktop, your couch or on the go.”
* [Inagist](http://inagist.com/) recently [moved from Cassandra to Riak](http://blog.inagist.com/riak-at-inagistcom)
* Riak has partnered with [Joyent](http://joyent.com) and Node creator [Ryan Dahl](http://twitter.com/#!/ryah) to create [Riak SmartMachines](http://www.joyent.com/2010/09/joyent-riak-smartmachines-now-available/)
* Mark also is a fan of [Redis](http://code.google.com/p/redis/)
* [Scala](http://www.scala-lang.org/) and [Clojure](http://clojure.org/) have Andy excited, too.