import HopsRepository from "./HopsRepository.js";

const repositories = {
  hopsRepository: HopsRepository,
};

export const RepositoryFactory = {
  get: name => repositories[name],
  post: name => repositories[name],
  delete: name => repositories[name]
};
