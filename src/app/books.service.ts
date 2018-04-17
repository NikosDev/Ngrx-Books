import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class BooksService {

  constructor(private http: HttpClient) { }
  

  search(value: string){
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
                    .map(response => response['items']);
  }

  image(value: string){
    return this.http.get(value)
                    .map(response => response['etag']);
  }

}
