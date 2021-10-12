import axios from 'axios'

export const RequestAPI = {
  postTest(value: boolean) {
    return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: value})
  }
}