import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SightsGeoComponent} from "./sights-geo/sights-geo.component";
import {SightsLandmarksComponent} from "./sights-landmarks/sights-landmarks.component";
import {SightsActivitiesComponent} from "./sights-activities/sights-activities.component";
import {CommunityHousingComponent} from "./community-housing/community-housing.component";
import {CommunityDemographicsComponent} from "./community-demographics/community-demographics.component";
import {PlaceParksComponent} from "./place-parks/place-parks.component";
import {PlaceSchoolsComponent} from "./place-schools/place-schools.component";
import {PlaceShoppingAndDiningComponent} from "./place-shopping-and-dining/place-shopping-and-dining.component";
import {TransportationComponent} from "./transportation/transportation.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";

const routes: Routes = [
  {
    path: '', title:'Home', component: HomeComponent
  },
  {
    path: 'sightsgeo', title:'Sights-Geography and Location', component: SightsGeoComponent
  },
  {
    path: 'sightslandmarks', title:'Sights-Landmarks', component: SightsLandmarksComponent
  },
  {
    path: 'activities', title:'Sights-Activities', component: SightsActivitiesComponent
  },
  {
    path: 'housing', title:'Community-Housing', component: CommunityHousingComponent
  },
  {
    path: 'demog', title:'Community-Demographics', component: CommunityDemographicsComponent
  },
  {
    path: 'parks', title:'Place-Parks', component: PlaceParksComponent
  },
  {
    path: 'schools', title:'Place-Schools', component: PlaceSchoolsComponent
  },
  {
    path: 'shopdin', title:'Place-Shopping & Dining', component: PlaceShoppingAndDiningComponent
  },
  {
    path: 'transpo', title:'Transportation', component: TransportationComponent
  },
  {
    path: 'contact', title:'Contact Us', component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
