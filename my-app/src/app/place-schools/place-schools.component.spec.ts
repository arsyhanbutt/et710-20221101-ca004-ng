import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceSchoolsComponent } from './place-schools.component';

describe('PlaceSchoolsComponent', () => {
  let component: PlaceSchoolsComponent;
  let fixture: ComponentFixture<PlaceSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceSchoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
