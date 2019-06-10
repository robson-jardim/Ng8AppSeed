import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSiteAdminComponent } from './layout-site-admin.component';

describe('AppMainComponent', () => {
  let component: LayoutSiteAdminComponent;
  let fixture: ComponentFixture<LayoutSiteAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSiteAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSiteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
