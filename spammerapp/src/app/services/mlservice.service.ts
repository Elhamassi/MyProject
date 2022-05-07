import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MlserviceService {

  private Url = 'http://127.0.0.1:5000/';

  constructor(private http: HttpClient) { }


  getpredection(datamessage) {
    return this.http.post("http://127.0.0.1:5000/api",{'message':datamessage});
  }

}
