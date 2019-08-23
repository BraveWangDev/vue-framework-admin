import axios from "@/api/axios";

export const login = params => {
  return axios.fetchPost("/login", params);
};

export const logout = params => {
  return axios.fetchPost("/logout", params);
};
