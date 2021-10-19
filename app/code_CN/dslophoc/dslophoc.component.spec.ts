import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DslophocComponent } from './dslophoc.component';

describe('DslophocComponent', () => {
  let component: DslophocComponent;
  let fixture: ComponentFixture<DslophocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DslophocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DslophocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
