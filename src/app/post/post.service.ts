import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from './post';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = 'https://jsonplaceholder.typicode.com';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  // get all methods

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/posts/').pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error)
    }))
  }
  // get all methods end 

  //  create start

  create(post: Post): Observable<any> {
    return this.httpClient.post(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error)
    }))
  }
  // create end


  // Find Start
  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/posts/' + id).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error)
    }))
  }

  // Update start

  update(id: number, post: Post): Observable<any> {
    return this.httpClient.put(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error)
    }))
  }
  // Delete Start
  deletePost(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.apiURL}/posts/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error occurred while deleting post:', error);
          return throwError(() => new Error('Failed to delete post. Please try again.'));
        })
      );
  }
  // delete end
}


