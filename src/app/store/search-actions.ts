import { Action } from '@ngrx/store';

export const SEARCH_RESULTS = 'Search Results';
export const SEARCH_TERMS = 'Search Terms';
export const SEARCH_IMAGE = 'Search Image';

export class SearchResults implements Action {
  readonly type = SEARCH_RESULTS;

  constructor(public payload: any) {}
}

export class SearchTerms implements Action {
  readonly type = SEARCH_TERMS;

  constructor(public payload: any) {}
}

export class SearchImage implements Action {
  readonly type = SEARCH_IMAGE;

  constructor(public payload: any) {}
}

/* export all */
export type All = SearchResults| SearchTerms| SearchImage;