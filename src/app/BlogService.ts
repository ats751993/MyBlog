
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable()
export class BlogService  {
  private headers = new Headers({'Content-Type': 'application/json'});
  private AppUrl = 'http://localhost:3040/';

    constructor(private http: Http) {}

   AddUserDetail(User:any):Promise<any> {
    debugger
    return this.http
      .post(this.AppUrl + 'InsertRegistration',User, {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

    GetAlllogindetail(un:any,ps:any): Promise<any> {
   debugger
             return this.http.get(this.AppUrl + 'Login?un='+ un + ' &ps=' + ps)
             .toPromise()
             .then((response) => {
              return response.json();
                })
         }   
  

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
}
}