## Local meet-up shout-at

Miriah Peterson ([captainnobody1 on Twitter](https://twitter.com/captainnobody1)) says hello on behalf of the [Utah Go User Group](http://utahgolang.com/), as well as [Women Who Go Utah](https://www.meetup.com/Women-Who-Go-Utah/).

## Some things mentioned on the show

- [**Statsviz** gives you an instant live visualization of your Go application runtime statistics (GC, MemStats, etc.) in the browser](https://github.com/arl/statsviz)
- [`sync.Pool` helps you reduce allocations by keeping objects around when they might otherwise be garbage collected](https://pkg.go.dev/sync#Pool)
- From the **Go blog**: [The Journey of Go's Garbage Collector](https://blog.golang.org/ismmkeynote)

## Viewcore

[The viewcore tool](https://pkg.go.dev/golang.org/x/debug/cmd/viewcore) is a command-line tool for exploring the state of a Go process that has dumped core.

**Jordan says:**

It's complicated because it still doesn't work out of the box, you need my branch which isn't merged:
* [https://github.com/jordanlewis/debug/tree/fix-bugs](https://github.com/jordanlewis/debug/tree/fix-bugs)… (my branch)
* [https://github.com/golang/debug/tree/master/cmd/viewcore](https://github.com/golang/debug/tree/master/cmd/viewcore)… (the upstream)
* [https://go-review.googlesource.com/c/debug/+/321736](https://go-review.googlesource.com/c/debug/+/321736)… (the CL that isn't merged yet)