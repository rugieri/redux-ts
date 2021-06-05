import { ActionType } from '../action-types';
import { Action } from '../actions';
interface RepoState {
  loading: boolean;
  error: string | null;
  data: string [];
};




const reducer = (state: RepoState, action: Action ) : RepoState => {
  if (action.type === 'search_repos_success') {
     action.payload
  };

  switch (action.type) {
    case ActionType.SEARCH_REPOS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOS_ERROR:
      return { loading: false, error: action.payload, data: [] }
      
    default:
      return state;
  };

};

export default reducer;