import { ActionType} from '../action-types';

interface SearchReposAction {
  type: ActionType.SEARCH_REPOS;
};

interface SearchReposSucessAction {
  type: ActionType.SEARCH_REPOS_SUCCESS;
  payload: string [];
};

interface SearchReposErrAction {
  type: ActionType.SEARCH_REPOS_ERROR;
  payload: string;
};

export type Action = 
  | SearchReposAction 
  | SearchReposSucessAction 
  | SearchReposErrAction;
