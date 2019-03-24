import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private URL:string = "http://localhost:1234";

  constructor(private http: HttpClient) { }

  getMessage(){
    return this.http.get(this.URL+'/');
  }

}
