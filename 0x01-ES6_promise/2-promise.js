/* eslint-disable indent */
export default function handleResponseFromAPI(promise) {
  // eslint-disable-next-line no-unused-vars
  promise.then((_value) => ({
    status: 200, body: 'success',
    // eslint-disable-next-line no-unused-vars
  })).catch((_error) => new Error());
}
