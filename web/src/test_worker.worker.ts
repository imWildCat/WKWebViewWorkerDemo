// export default {};

console.log('window:', typeof window, typeof self);


self.onmessage = ({ data: { question } }) => {
  console.log('question:', question);
  self.postMessage({
    answer: 42,
  });
};

self.onmessage = ({ data: { question } }) => {
  console.log('question2:', question);
  self.postMessage({
    answer: 42,
  });
};
