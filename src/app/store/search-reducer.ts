import * as SearchActions from './search-actions';

export interface State {
  searchTerms: string;
  results: any
  image: any
}

const initialState: any = {
  searchTerms: '',
  results: '',
  image: ''
};

export function reducer(state = [initialState], action: SearchActions.All): any {
  switch(action.type) {
    case SearchActions.SEARCH_RESULTS: {
      return {
        ...state,
        results: action.payload        
      };
    }

    case SearchActions.SEARCH_TERMS: {
      return {
        ...state,
        searchTerms: action.payload
      };
    }

    case SearchActions.SEARCH_IMAGE: {
      return {
        ...state,
        image: action.payload
      };
    }

    default: {
      return state;
    }
  }
}