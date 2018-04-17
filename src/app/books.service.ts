import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Injectable()
export class BooksService {

  constructor(private http: HttpClient) { }
  

  search(value: string){
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
                    .map(response => response['items'])
  }

  image(imageUrl: any){
    return this.http.get(imageUrl)
                    .do(response => console.log(response['volumeInfo']['imageLinks']['small']))
                    .map(response => JSON.stringify(response['volumeInfo']['imageLinks']['small']));
  }

}
