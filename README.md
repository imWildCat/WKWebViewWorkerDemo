# WKWebViewWorkerDemo for iOS

## Background

From [this node.js documentation](https://nodejs.org/api/worker_threads.html),

> Workers (threads) are useful for performing CPU-intensive JavaScript operations. They do not help much with I/O-intensive work. The Node.js built-in asynchronous I/O operations are more efficient than Workers can be.

This project is to test the availability of [`Worker`](https://developer.mozilla.org/en-US/docs/Web/API/Worker) support in `WKWebView`.

## Get started

1. In `./web`, run `yarn && yarn build-dev`.
2. Open `WKWebViewWorkerDemo.xcodeproj` in Xcode 13 and run it.

## License

MIT
