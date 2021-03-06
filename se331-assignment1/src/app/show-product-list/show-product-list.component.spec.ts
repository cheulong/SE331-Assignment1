import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductListComponent } from './show-product-list.component';

describe('ShowProductListComponent', () => {
  let component: ShowProductListComponent;
  let fixture: ComponentFixture<ShowProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
