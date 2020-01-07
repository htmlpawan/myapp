import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
const localUrl = 'http://localhost/ci-phpweb-api/api/';

@Injectable({
  providedIn: 'root'
})
export class NewseriveService {

  constructor(private http: HttpClient) { }

  display(){
    return 'Hello Testing';
  }
  

  getSmartphone() {
    return this.http.get(localUrl+'categories', {responseType: 'json'});
  }

  updateBlog(blog, id: number) {
    return this.http.post<any>(localUrl + 'updatecategory/' + id, blog)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteCate(id: number) {
    return this.http.delete(localUrl + 'deleteCate/' + id).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }

  paratest()
  {                         
    return 'The AppComponent template no longer needs because the app will only display the HeroesComponent when the user navigates to it.';
  }
}
