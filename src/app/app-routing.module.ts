import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { BestellingenComponent } from './pages/bestellingen/bestellingen.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdvertentiesComponent } from './pages/advertenties/advertenties.component';
import { Bestellingen2Component } from './pages/bestellingen2/bestellingen2.component';
import { BedrijfComponent } from './pages/bedrijf/bedrijf.component';
import { Advertenties2Component } from './pages/advertenties2/advertenties2.component';
import { KlantenComponent } from './pages/klanten/klanten.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'bestellingen', component: BestellingenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'advertenties', component: AdvertentiesComponent },
  { path: 'bestellingen2', component: Bestellingen2Component },
  { path: 'bedrijf', component: BedrijfComponent },
  { path: 'advertenties2', component: Advertenties2Component },
  { path: 'klanten', component: KlantenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
