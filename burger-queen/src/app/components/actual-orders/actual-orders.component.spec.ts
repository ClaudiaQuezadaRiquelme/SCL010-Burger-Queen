import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualOrdersComponent } from './actual-orders.component';

describe('ActualOrdersComponent', () => {
  let component: ActualOrdersComponent;
  let fixture: ComponentFixture<ActualOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
