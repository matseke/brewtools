import Repository from "./Repository";

const hopsResource = "hops";

export default {
  get() {
    return Repository.get(`${hopsResource}`);
  },
  post(data) {
    return Repository.post(`${hopsResource}`, data);
  },
  delete(id) {
    return Repository.delete(`${hopsResource}/${id}`);
  },
  put(id, data) {
    return Repository.put(`${hopsResource}/${id}`, data);
  },
};
