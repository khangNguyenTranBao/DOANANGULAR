import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsdiemhocsinhComponent } from './dsdiemhocsinh.component';

describe('DsdiemhocsinhComponent', () => {
  let component: DsdiemhocsinhComponent;
  let fixture: ComponentFixture<DsdiemhocsinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsdiemhocsinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsdiemhocsinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
