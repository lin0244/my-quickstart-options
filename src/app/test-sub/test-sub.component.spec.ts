import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSubComponent } from './test-sub.component';

describe('TestSubComponent', () => {
  let component: TestSubComponent;
  let fixture: ComponentFixture<TestSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
