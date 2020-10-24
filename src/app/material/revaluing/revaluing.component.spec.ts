import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevaluingComponent } from './revaluing.component';

describe('RevaluingComponent', () => {
  let component: RevaluingComponent;
  let fixture: ComponentFixture<RevaluingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevaluingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevaluingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
