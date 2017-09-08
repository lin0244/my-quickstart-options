import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {
  getUrl = 'https://easy-mock.com/mock/599d42d3059b9c566dccdc75/lamp/users/getAccountInfo';
  postUrl = 'https://easy-mock.com/mock/599d42d3059b9c566dccdc75/lamp/users/login';


  constructor(private http: Http) { }

  // get请求设置请求头
  get(): Observable<any> {
    return this.http.get(this.getUrl, new RequestOptions({
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }),
      search: { aaa: 'bbb' }
    }))
      .map(res => res.json());
  }
  // post请求设置请求头
  post(): Observable<any> {
    return this.http.post(this.postUrl,
      { aaa: 'bbb' },
      new RequestOptions({
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        })
      })
    ).map(res => res.json());
  }
}
