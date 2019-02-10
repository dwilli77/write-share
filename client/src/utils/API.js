import axios from "axios";

export default {

  login: function(userData) {
    return axios.post("/api/user", userData);
  },
  register: function(userData) {
      return axios.post("/api/user/new", userData)
  }
};
