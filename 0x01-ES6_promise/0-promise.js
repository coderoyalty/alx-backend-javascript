export default function getResponseFromAPI() {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve('alx');
    }, 300);
  });
}
