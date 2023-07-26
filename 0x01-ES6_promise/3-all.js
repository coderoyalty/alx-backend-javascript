// eslint-disable-next-line no-unused-vars
import { createUser, uploadPhoto } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()]).then((results) => {
    const [userResult, photoResult] = results;
    console.log(`${photoResult.body} ${userResult.firstname} ${userResult.lastname}`);
    // eslint-disable-next-line no-unused-vars
  }).catch((error) => {
    console.log('Signup system offline');
  });
}
