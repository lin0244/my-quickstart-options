import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from './user-model';
@Injectable()
export class HttpService {
  getUrl = 'https://easy-mock.com/mock/599d42d3059b9c566dccdc75/lamp/logout';
  postUrl = 'https://easy-mock.com/mock/599d42d3059b9c566dccdc75/lamp/signin';
  constructor(public http: Http) { }

  public getPostList(searchText: string, page: number): Observable<User[]> {
    return this.http
      .get(this.getUrl, { search: searchText })
      .map((res: Response) => {
        const result = res.json();
        console.log(result);
        return result;
      })
      .catch((error: any) => Observable.throw(error || 'Serve error'));

  }

  public postUserInfo(user): Observable<User[]> {  // 类型表明返回一个Observable对象。内容类型为[User]
    // const data = new URLSearchParams();             // 大漠说必须以这种形式存数据，然后发给后台，但是好像没必要啊
    // data.append('email', user.email);
    // data.append('password', user.password);
    return this.http
      .post(this.postUrl, user)
      .map((res: Response) => {
        const result = res.json();
        console.log(result);
        return result;
      });
  }
}
