import axios from "axios";

const BASE_API = "http://localhost:3000";

export default {
  checkToken: async (token) => {
    try {
      const resp = await axios.get(`${BASE_API}/auth/`, {
        headers: { Authorization: "Bearer " + token },
      });

      return resp.data;
    } catch (err) {
      console.error(err);

      return null;
    }
  },
  SignIn: async (email, password) => {
    try {
      const resp = await axios.post(`${BASE_API}/auth/signIn`, {
        email,
        password,
      });

      return resp.data;
    } catch (err) {
      console.error(err);

      return null;
    }
  },
  SignUp: async (name, email, password) => {
    try {
      const resp = await axios.post(`${BASE_API}/auth/signUp`, {
        name,
        email,
        password,
      });

      return resp.data;
    } catch (err) {
      console.error(err);

      return null;
    }
  },
};
