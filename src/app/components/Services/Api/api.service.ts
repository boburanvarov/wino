import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiVersion: string = environment.apiVersion;
  apiHost: string = environment.apiUrl;

  get(url: string) {
    return this.http.get<any>(this.apiHost + '/' + this.apiVersion + '/' + url + '/');
  }

  post(url: string, body: any) {
    return this.http.post<any>(this.apiHost + '/' + this.apiVersion + '/' + url + '/', body);
  }

  put(url: string, body: any) {
    return this.http.put<any>(this.apiHost + '/' + this.apiVersion + '/' + url + '/', body);
  }
}
