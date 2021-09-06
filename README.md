# WKWebViewWorkerDemo for iOS

## Background

From [this node.js documentation](https://nodejs.org/api/worker_threads.html),

> Workers (threads) are useful for performing CPU-intensive JavaScript operations. They do not help much with I/O-intensive work. The Node.js built-in asynchronous I/O operations are more efficient than Workers can be.

This project is to test the availability of [`Worker`](https://developer.mozilla.org/en-US/docs/Web/API/Worker) support in `WKWebView`.

## Get started

1. In `./web`, run `yarn && yarn build-dev`.
2. Open `WKWebViewWorkerDemo.xcodeproj` in Xcode 13 and run it.

## Side notes

1. There're many ways to load the JavaScript bundle of workers. `Blob` with `raw-loader` is just one of these approaches. And it looks like a workaround.
2. Since `window` is not accessible through `Worker`'s context, it is possible to use a single JavaScript bundle for both the web page and worker.

## License

MIT
