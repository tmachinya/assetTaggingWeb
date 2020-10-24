import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedAssetsComponent } from './searched-assets.component';

describe('SearchedAssetsComponent', () => {
  let component: SearchedAssetsComponent;
  let fixture: ComponentFixture<SearchedAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
