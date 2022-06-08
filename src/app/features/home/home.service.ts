import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
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
    // @ts-ignore
    return this.http.get(`http://localhost:4200/api/user/donations`, httpOptions)
  }
  getinfo(): any {
    // @ts-ignore
    return this.http.get(`http://localhost:4200/api/user/info`, httpOptions)
  }

}
