import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSubjectComponent } from './test-subject.component';

describe('TestSubjectComponent', () => {
  let component: TestSubjectComponent;
  let fixture: ComponentFixture<TestSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
