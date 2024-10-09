import axios from "axios";

const API = "http://localhost:3000/parental-blog/";

const createUser = (userData) => {
  axios.post(`${API}/user`, userData);
};

const getUser = (email, password) => {
  return axios.get(`${API}/user/${email}/${password}`);
};

const createblog = (userblog) => {
  axios.post(`${API}/userblog`, userblog);
};

const getUserBlogs = () => {
  return axios.get(`${API}/userblog`);
};

const getuserblogs = (email) => {
  return axios.get(`${API}/userblog/${email}`);
};

const deleteblog = (id) => {
  return axios.delete(`${API}/userblog/${id}`);
};

export {
  createUser,
  getUser,
  createblog,
  getUserBlogs,
  getuserblogs,
  deleteblog,
};
