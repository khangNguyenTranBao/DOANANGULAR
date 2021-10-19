import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DANHSACHHSComponent } from './danhsachhs.component';

describe('DANHSACHHSComponent', () => {
  let component: DANHSACHHSComponent;
  let fixture: ComponentFixture<DANHSACHHSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DANHSACHHSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DANHSACHHSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
