import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';

const search_repos = (term: string) => {
  return async (dispatch: any) => {
    dispatch({ 
      type: ActionType.SEARCH_REPOS
    });

    try {

    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOS_ERROR,
        payload: err.message,
      })
    }
  };
};