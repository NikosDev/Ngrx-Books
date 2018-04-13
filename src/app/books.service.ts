import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {

  constructor(private http: HttpClient) { }

  search(value: string){
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
                    .map(response => response.items);
  }

}
