import FermentablesRepository from "./FermentablesRepository.js";
import HopsRepository from "./HopsRepository.js";

const repositories = {
  hopsRepository: HopsRepository,
  fermentablesRepository: FermentablesRepository,
};

export const RepositoryFactory = {
  get: name => repositories[name],
  post: name => repositories[name],
  delete: name => repositories[name]
};
