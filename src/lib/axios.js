import axios from 'axios'

//baseURL ese nombre debe ser de es forma si o si, para quen o genere error
const api = axios.create({
    baseURL: 'http://localhost:4000'
})

export default api