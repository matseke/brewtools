import Repository from "./Repository";

const hopsResource = "hops";

export default {
  get() {
    return Repository.get(`${hopsResource}`);
  },
  post(data) {
    console.log('in post');
    return Repository.post(`${hopsResource}`, data);
  }
};
