import * as SearchActions from './search-actions';

export interface State {
  searchTerms: string;
  results: any
}

const initialState: any = {
  searchTerms: '',
  results: ''
};

export function reducer(state = [initialState], action: SearchActions.All): any {
  switch(action.type) {
    case SearchActions.SEARCH_RESULTS: {
      return {
        ...state,
        searchTerms: action.payload
      };
    }

    case SearchActions.SEARCH_TERMS: {
      return {
        ...state,
        results: action.payload
      };
    }

    default: {
      return state;
    }
  }
}