import axios from "axios";

const api = axios.create({
  baseURL: "http://indj-firewall.duckdns.org",
  params: {},
});

export const makePrivate = (crawledIdx) => {
  return api.post("/crawl_list/make_private", {
    crawledIdx: crawledIdx,
  });
};
