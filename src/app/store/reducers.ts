import * as fromSearch from './search-reducer';

export interface State {
  search: fromSearch.State;
}


export function selectResults(state: State) {
  return state.search.results;
}

export function selectCount(state: State) {
  return state.search.results.length;
}

export function selectTerms(state: State) {
  return state.search.searchTerms;
}

export function selectImage(state: State) {
  return state.search.image;
}


export const reducers = {
    search: fromSearch.reducer
  };