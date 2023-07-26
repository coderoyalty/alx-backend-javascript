export default function handleResponseFromAPI(promise) {
  // eslint-disable-next-line no-unused-vars
  return promise.then((_value) => {
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
    // eslint-disable-next-line no-unused-vars
  }).catch((_error) => {
    console.log('Got a response from the API');
    return new Error();
  });
}
