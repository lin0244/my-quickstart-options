import { Component, OnInit } from '@angular/core';

import { HttpService } from '../service/http.service';
@Component({
  selector: 'my-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css']
})
export class TestHttpComponent implements OnInit {

  constructor(public httpService: HttpService) { }

  ngOnInit() {
    this.httpService
      .getPostList('zhiq', 1)
      .subscribe(data => console.log(data));

    this.httpService
      .postUserInfo({ email: '865077695@qq.com', password: '123123' })
      .subscribe(data => console.log(data));
  }

}
