
// We don't export anything from the test_worker.worker.ts.
// @ts-ignore
import testWorkerCode from './test_worker.worker';

setTimeout(() => {
  const testWorkerCodeBlob = new Blob([ testWorkerCode as string ], { type: 'application/javascript' });
  const testWorkerCodeBlobURL = URL.createObjectURL(testWorkerCodeBlob);
  console.log('testWorkerCode:', testWorkerCode);

  const testWorker = new Worker(testWorkerCodeBlobURL);

  console.log('hello world!');

  const divElement = document.createElement('div');
  document.body.appendChild(divElement);

  divElement.textContent = 'ha';

  testWorker.postMessage({
    question:
      'The Answer to the Ultimate Question of Life, The Universe, and Everything.',
  });
  testWorker.onmessage = ({ data: { answer } }) => {
    console.log(answer);
  };
}, 5000); // Leaving more time to help iOS devs to attach their Safari debugger