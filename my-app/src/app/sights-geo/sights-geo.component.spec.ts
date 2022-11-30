import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightsGeoComponent } from './sights-geo.component';

describe('SightsGeoComponent', () => {
  let component: SightsGeoComponent;
  let fixture: ComponentFixture<SightsGeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightsGeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SightsGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
