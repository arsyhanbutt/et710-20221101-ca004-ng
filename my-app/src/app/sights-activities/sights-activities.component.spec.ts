import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightsActivitiesComponent } from './sights-activities.component';

describe('SightsActivitiesComponent', () => {
  let component: SightsActivitiesComponent;
  let fixture: ComponentFixture<SightsActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightsActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SightsActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
