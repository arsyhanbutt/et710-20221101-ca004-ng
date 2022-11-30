import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityDemographicsComponent } from './community-demographics.component';

describe('CommunityDemographicsComponent', () => {
  let component: CommunityDemographicsComponent;
  let fixture: ComponentFixture<CommunityDemographicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityDemographicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityDemographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
