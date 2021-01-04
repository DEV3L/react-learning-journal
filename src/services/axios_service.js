import axios from 'axios';

export async function axiosRequest(currentUser) {
  const idToken = await currentUser.getIdToken(true);
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + idToken;

  return axios;
}
