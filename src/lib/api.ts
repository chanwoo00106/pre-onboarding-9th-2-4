import axios from 'axios'

const API = axios.create({
  baseURL: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com',
})

export default API
