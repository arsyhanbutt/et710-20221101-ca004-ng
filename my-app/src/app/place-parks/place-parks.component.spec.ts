import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceParksComponent } from './place-parks.component';

describe('PlaceParksComponent', () => {
  let component: PlaceParksComponent;
  let fixture: ComponentFixture<PlaceParksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceParksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceParksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
