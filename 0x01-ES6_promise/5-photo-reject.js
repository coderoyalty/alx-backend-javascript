export default function uploadPhoto(filename) {
  return new Promise((_, reject) => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject(`${filename} cannot be processed`);
  });
}
