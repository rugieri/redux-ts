interface RepoState {
  loading: boolean;
  error: string | null;
  data: string [];
};

interface SearchReposAction {
  type: 'search_repos';
};

interface SearchReposSucessAction {
  type: 'search_repos_success';
  payload: string [];
};

interface SearchReposErrAction {
  type: 'search_repos_error';
  payload: string;
};

const reducer = (state: RepoState, action: SearchReposAction | SearchReposSucessAction | SearchReposErrAction ) : RepoState => {
  if (action.type === 'search_repos_success') {
    //100 % that 'action' satisfies the SearchReposSucessAction interface
    action.payload
  };

  switch (action.type) {
    case 'search_repos':
      return { loading: true, error: null, data: [] };
    case 'search_repos_success':
      //100 % that 'action' is SearchReposSucessAction
      return { loading: false, error: null, data: action.payload };
    case 'search_repos_error':
      return { loading: false, error: action.payload, data: [] }
      
    default:
      return state;
  };

};

export default reducer;