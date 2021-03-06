import { Component } from '@angular/core';
import { BooksService } from "./books.service";

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as SearchActions from './store/search-actions';
import * as fromRoot from './store/reducers';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  terms: Observable<any>;
  books: Observable<any>;
  image: Observable<string>;
  zoom: any = '&zoom=3'

  constructor(
    private service:BooksService,
    private store: Store<fromRoot.State>
  ){
    this.terms = store.select(fromRoot.selectTerms);
    this.books = store.select(fromRoot.selectResults);
    this.image = store.select(fromRoot.selectImage);
  }

  searchBooks(value: string){
    this.store.dispatch(new SearchActions.SearchTerms(value));

    this.service.search(value)
                .subscribe(results => this.store.dispatch(new SearchActions.SearchResults(results)));
        
    
    console.log(this.books);    
  }

}
