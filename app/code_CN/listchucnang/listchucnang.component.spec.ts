import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchucnangComponent } from './listchucnang.component';

describe('ListchucnangComponent', () => {
  let component: ListchucnangComponent;
  let fixture: ComponentFixture<ListchucnangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListchucnangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListchucnangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
