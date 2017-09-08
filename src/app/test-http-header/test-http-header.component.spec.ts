import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHttpHeaderComponent } from './test-http-header.component';

describe('TestHttpHeaderComponent', () => {
  let component: TestHttpHeaderComponent;
  let fixture: ComponentFixture<TestHttpHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHttpHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHttpHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
