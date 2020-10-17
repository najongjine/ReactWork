import axios from "axios";

const api = axios.create({
  baseURL: "http://indj-firewall.duckdns.org",
  params: {},
});

export const login = (username, password) => {
  return api.post("/member/login", {
    username: username,
    password: password,
  });
};
