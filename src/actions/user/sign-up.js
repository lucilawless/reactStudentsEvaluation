import ApiClient from '../../api/client'
import signIn from './sign-in'

const api = new ApiClient()

export default (user) => {
  return dispatch => {
    api.post('users', { ...user })
      .then((res) => {
        const { email, password } = user
        dispatch(signIn({ email, password }))
      })
      .catch((err) => console.error(err))
  }
}
