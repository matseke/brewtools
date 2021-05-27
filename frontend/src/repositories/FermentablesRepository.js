import Repository from "./Repository";

const fermentablesResource = "fermentables";

export default {
  get() {
    return Repository.get(`${fermentablesResource}`);
  },
  post(data) {
    return Repository.post(`${fermentablesResource}`, data);
  },
  delete(id) {
    return Repository.delete(`${fermentablesResource}/${id}`);
  }
};
