import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentregistraionComponent } from './studentregistraion.component';

describe('StudentregistraionComponent', () => {
  let component: StudentregistraionComponent;
  let fixture: ComponentFixture<StudentregistraionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentregistraionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentregistraionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
