import Repository from "./Repository";

const hopsResource = "hops";

export default {
  get(url) {
    return Repository.get(`${url}/${hopsResource}`);
  },
};
