import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityHousingComponent } from './community-housing.component';

describe('CommunityHousingComponent', () => {
  let component: CommunityHousingComponent;
  let fixture: ComponentFixture<CommunityHousingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityHousingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
