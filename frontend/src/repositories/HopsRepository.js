import Repository from "./Repository";

const hopsResource = "hops";

export default {
  get() {
    return Repository.get(`${hopsResource}`);
  },
};
