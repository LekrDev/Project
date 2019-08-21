import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {interval} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PhpHandlerService {
  dataUrl = 'http://localhost/php/main.php';
  insertUrl = 'http://localhost/php/insert.php'
  public data: any[];
  messages: any[];
  public response$: Observable<any[]>

  public counter = interval(5000);
  constructor(private http: HttpClient) {
    this.response$ = this.getAll()

    this.counter.subscribe(val => {
      
     this.getAll()
    });
   }

 
  getData(): Observable<any[]>
  {
    return this.http.get<any[]>(this.dataUrl);
  }

  
  getAll(): Observable<any[]> {
    
    return this.http.get(this.dataUrl).pipe(
      map((res) => {
        
        this.data = [res]
        
        return [res];
    }))
  }

  insertData(data1,data2)
  {
    
    this.store(data1, data2)
    return;
   
    
  }
  store(d1,d2): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    const params = new FormData();
    params.append('data1', d1);
    params.append('data2', d2);
    this.http.post(`http://localhost/php/insert.php`, params).subscribe((_)=>{
      console.log(_)
    })

    return;
    
}
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


}
