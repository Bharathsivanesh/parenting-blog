import axios from 'axios'

const API = "http://localhost:3000/parental-blog/"

const createUser = (userData) => {
    axios.post(`${API}/user`,userData)
}

const getUser = (email,password) => {
    axios.get(`${API}/user/${email}/${password}`)
}

export {createUser, getUser}