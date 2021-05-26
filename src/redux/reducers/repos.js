import { FETCH_REPOS } from "../actions/actionTypes";

const initialState = {
  repos: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REPOS:
      const newRepos = payload;
      return { ...state, repos: state.repos.concat(newRepos) };
    default:
      return state;
  }
};
