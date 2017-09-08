import { HttpService } from './../service/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-test-http-header',
  templateUrl: './test-http-header.component.html',
  styleUrls: ['./test-http-header.component.css']
})
export class TestHttpHeaderComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.get()
      .subscribe((data) => {
        console.log(data);
      });

    this.httpService.post()
      .subscribe((data) => {
        console.log(data);
      });
  }

}
