import axios from "axios";

const API_URL = "/api/v1/users/";

// register user

const register = async (userData) => {
  const res = await axios.post(`${API_URL}register`, userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const signin = async (userData) => {
  const res = await axios.post(`${API_URL}login`, userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

// signout

const signout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  signin,
  signout,
};

export default authService;
