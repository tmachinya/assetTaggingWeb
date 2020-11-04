import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevaluateListComponent } from './revaluate-list.component';

describe('RevaluateListComponent', () => {
  let component: RevaluateListComponent;
  let fixture: ComponentFixture<RevaluateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevaluateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevaluateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
