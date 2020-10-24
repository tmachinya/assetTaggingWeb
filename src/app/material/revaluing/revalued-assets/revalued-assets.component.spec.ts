import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevaluedAssetsComponent } from './revalued-assets.component';

describe('RevaluedAssetsComponent', () => {
  let component: RevaluedAssetsComponent;
  let fixture: ComponentFixture<RevaluedAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevaluedAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevaluedAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
