import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceShoppingAndDiningComponent } from './place-shopping-and-dining.component';

describe('PlaceShoppingAndDiningComponent', () => {
  let component: PlaceShoppingAndDiningComponent;
  let fixture: ComponentFixture<PlaceShoppingAndDiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceShoppingAndDiningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceShoppingAndDiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
