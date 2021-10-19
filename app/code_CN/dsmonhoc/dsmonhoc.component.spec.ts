import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsmonhocComponent } from './dsmonhoc.component';

describe('DsmonhocComponent', () => {
  let component: DsmonhocComponent;
  let fixture: ComponentFixture<DsmonhocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsmonhocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsmonhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
