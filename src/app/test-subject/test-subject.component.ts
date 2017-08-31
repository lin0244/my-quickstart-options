import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'my-test-subject',
  templateUrl: './test-subject.component.html',
  styleUrls: ['./test-subject.component.css']
})
export class TestSubjectComponent implements OnInit {

  public searchSubject: Subject<string> = new Subject<string>();  // 声明一个主题
  constructor() { }

  ngOnInit() {
    this.searchSubject
      .debounceTime(500)
      // .distinctUntilChanged()
      .subscribe(searchText => {      // 订阅searchSubject主题
        console.log('searchText:' + searchText);
      });
    this.searchSubject.next('1');     // 主题发布消息
  }

  pub(s) {
    this.searchSubject.next(s);      // 主题发布消息
  }

}
