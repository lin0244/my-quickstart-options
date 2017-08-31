import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-test-sub',
  templateUrl: './test-sub.component.html',
  styleUrls: ['./test-sub.component.css']
})
export class TestSubComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // eg 1
    const stream1$ = new Observable(observable => { // 创建观察者对象。并往下传递消息
      const timeout = setTimeout(() => {
        observable.next('Observable timeout');
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    });

    const disposable = stream1$.subscribe(value => console.log(value)); // 订阅stream1$。接收值并做处理
    setTimeout(() => { disposable.unsubscribe(); }, 1000);              // 1000ms后取消订阅。那么上面的就不会执行了

    // eg 2
    const stream2$ = new Observable<number>(observer => {
      let count = 0;
      const interval = setInterval(() => {
        observer.next(count++);             // 可以多次发射事件，订阅者可以多次接收到
      }, 1000);
    });

    const disposable2 = stream2$.subscribe(value => console.log('直接用数据' + value));

    // eg 3
    // stream2$
    //   .filter(val => val % 2 === 0)       // 先对数据进行一些处理再传给订阅者
    //   .subscribe(value => console.log('先处理在使用' + value));

    // stream2$
    //   .map(val => val * val)
    //   .subscribe(value => console.log('平方处理 ' + value));
  }

}
