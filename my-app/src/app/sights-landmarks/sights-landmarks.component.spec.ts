import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightsLandmarksComponent } from './sights-landmarks.component';

describe('SightsLandmarksComponent', () => {
  let component: SightsLandmarksComponent;
  let fixture: ComponentFixture<SightsLandmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightsLandmarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SightsLandmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
