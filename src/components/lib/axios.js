import Axios from 'axios'
const axiosUrl = process.env.axiosBaseurl

Axios.defaults.withCredentials = true
const axios = Axios.create({
  baseURL: axiosUrl,
})

export default axios
