import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

const httpOptions: any = {
  headers: new HttpHeaders({
    Accept: '*/*',
  }),
  observe: 'response'
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  getDonations(): any {
    return this.http.get(environment.url + '/api/v1/user/donations', httpOptions)
  }
  getinfo(): any {
    return this.http.get(environment.url + '/api/v1/user/info', httpOptions)
  }
  donate(body: any): any {
    return this.http.post(environment.url + '/api/v1/user/donate', body, httpOptions)
  }

}
