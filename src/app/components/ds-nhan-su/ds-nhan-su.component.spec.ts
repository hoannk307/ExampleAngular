import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsNhanSuComponent } from './ds-nhan-su.component';

describe('DsNhanSuComponent', () => {
  let component: DsNhanSuComponent;
  let fixture: ComponentFixture<DsNhanSuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsNhanSuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsNhanSuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
