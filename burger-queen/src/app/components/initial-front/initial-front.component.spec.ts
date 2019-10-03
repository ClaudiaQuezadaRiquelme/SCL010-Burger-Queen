import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialFrontComponent } from './initial-front.component';
import { ActualOrdersComponent } from '../actual-orders/actual-orders.component'

describe('InitialFrontComponent', () => {
  let component: InitialFrontComponent;
  let fixture: ComponentFixture<InitialFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        InitialFrontComponent,
        ActualOrdersComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
