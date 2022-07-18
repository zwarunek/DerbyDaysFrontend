import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

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
    return this.http.get(`http://localhost:4200/api/user/donations`, httpOptions)
  }
  getinfo(): any {
    return this.http.get(`http://localhost:4200/api/user/info`, httpOptions)
  }
  donate(body: any): any {
    return this.http.post(`http://localhost:4200/api/user/donate`, body, httpOptions)
  }

}
