import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SightsGeoComponent } from './sights-geo/sights-geo.component';
import { SightsLandmarksComponent } from './sights-landmarks/sights-landmarks.component';
import { SightsActivitiesComponent } from './sights-activities/sights-activities.component';
import { CommunityHousingComponent } from './community-housing/community-housing.component';
import { CommunityDemographicsComponent } from './community-demographics/community-demographics.component';
import { PlaceParksComponent } from './place-parks/place-parks.component';
import { PlaceSchoolsComponent } from './place-schools/place-schools.component';
import { PlaceShoppingAndDiningComponent } from './place-shopping-and-dining/place-shopping-and-dining.component';
import { TransportationComponent } from './transportation/transportation.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SightsGeoComponent,
    SightsLandmarksComponent,
    SightsActivitiesComponent,
    CommunityHousingComponent,
    CommunityDemographicsComponent,
    PlaceParksComponent,
    PlaceSchoolsComponent,
    PlaceShoppingAndDiningComponent,
    TransportationComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
