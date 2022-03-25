import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { regisModel } from '../auth/signup/regisModel';
import { ConfigService } from './config.service';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { logModel } from '../auth/login/logModel';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private _conf: ConfigService, private http: HttpClient) {}

  //..................URL.......................................//
  BASE_URL_REGISTER = this._conf.BASE_URL + 'registration/';
  BASE_URL_LOGIN = this._conf.BASE_URL + 'login/';
  BASE_URL_DATA = this._conf.BASE_URL + 'table/';

  //............................................................//

  //.............Register data ===> database-mysql..............//

  insert(regData: regisModel): Observable<any> {
    return this.http.post(`${this.BASE_URL_REGISTER}insert`, regData).pipe(
      map((res) => {
        console.log('response=', res);
        return res;
      }),
      catchError(this.handleError)
    );
  }
  //................................................................//

  //.............Login data check ===> database-mysql..............//

  check(logData: logModel): Observable<any> {
    return this.http.post(`${this.BASE_URL_LOGIN}check`, logData).pipe(
      map((res) => {
        console.log('response=', res);
        return res;
      }),
      catchError(this.handleError)
    );
  }
  //................................................................//

  //.............get data check ===> database-mysql..............//

  get(): Observable<regisModel[]> {
    return this.http.get(`${this.BASE_URL_DATA}get`).pipe(
      map((res: any) => {
        console.log('response getdata =', res);
        return res;
      }),
      catchError(this.handleError)
    );
  }
  //................................................................//

  //.......................catch-error function.....................//
  private handleError(error: HttpErrorResponse) {
    return throwError('Error somthing went wrong..!');
  }
  //...............................................................//
}
