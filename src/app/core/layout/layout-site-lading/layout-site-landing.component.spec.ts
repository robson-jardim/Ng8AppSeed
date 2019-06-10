import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSiteLandingComponent } from './layout-site-landing.component';

describe('LandingSiteComponent', () => {
  let component: LayoutSiteLandingComponent;
  let fixture: ComponentFixture<LayoutSiteLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSiteLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSiteLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
