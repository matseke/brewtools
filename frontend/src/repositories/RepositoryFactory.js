import HopsRepository from "./HopsRepository.js";

const repositories = {
  hopsRepository: HopsRepository,
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
