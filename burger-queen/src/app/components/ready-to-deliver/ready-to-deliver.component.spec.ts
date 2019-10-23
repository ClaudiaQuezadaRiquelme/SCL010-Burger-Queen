import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyToDeliverComponent } from './ready-to-deliver.component';

describe('ReadyToDeliverComponent', () => {
  let component: ReadyToDeliverComponent;
  let fixture: ComponentFixture<ReadyToDeliverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyToDeliverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyToDeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
