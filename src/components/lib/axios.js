import Axios from 'axios'
require('dotenv').config()

Axios.defaults.withCredentials = true
const axios = Axios.create({
  baseURL: process.env.AXIOS_BASEURL,
})

export default axios
