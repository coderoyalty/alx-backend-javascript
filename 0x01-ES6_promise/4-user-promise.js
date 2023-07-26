export default function signUpUser(firstName, lastName) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, _reject) => {
    resolve({
      firstName, lastName,
    });
  });
}
