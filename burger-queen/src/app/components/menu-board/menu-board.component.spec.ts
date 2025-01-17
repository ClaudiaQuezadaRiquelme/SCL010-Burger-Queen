import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBoardComponent } from './menu-board.component';
import { ProductListComponent } from '../product-list/product-list.component'

describe('MenuBoardComponent', () => {
  let component: MenuBoardComponent;
  let fixture: ComponentFixture<MenuBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MenuBoardComponent,
        ProductListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
