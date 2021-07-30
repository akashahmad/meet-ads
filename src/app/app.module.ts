import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common-component/header/header.component';
import { FooterComponent } from './common-component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ContactUsComponent } from './common-component/contact-us/contact-us.component';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { DashboardNavigationComponent } from './common-component/dashboard-navigation/dashboard-navigation.component';
import { BestellingenComponent } from './pages/bestellingen/bestellingen.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardHeaderComponent } from './common-component/dashboard-header/dashboard-header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdvertentiesComponent } from './pages/advertenties/advertenties.component';
import { Bestellingen2Component } from './pages/bestellingen2/bestellingen2.component';
import { BedrijfComponent } from './pages/bedrijf/bedrijf.component';
import { Advertenties2Component } from './pages/advertenties2/advertenties2.component';
import { KlantenComponent } from './pages/klanten/klanten.component';
import { FacturenComponent } from './pages/facturen/facturen.component';
import { WebshopComponent } from './pages/webshop/webshop.component';
import { ContactpersonComponent } from './components/contactperson/contactperson.component';
import { AlgemeenComponent } from './components/algemeen/algemeen.component';
import { OpeningstijdenComponent } from './components/openingstijden/openingstijden.component';
import { SocialComponent } from './components/social/social.component';
import { WatermerkComponent } from './components/watermerk/watermerk.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    PricingComponent,
    ContactUsComponent,
    DashboardNavigationComponent,
    BestellingenComponent,
    LayoutComponent,
    DashboardHeaderComponent,
    DashboardComponent,
    AdvertentiesComponent,
    Bestellingen2Component,
    BedrijfComponent,
    Advertenties2Component,
    KlantenComponent,
    FacturenComponent,
    WebshopComponent,
    ContactpersonComponent,
    AlgemeenComponent,
    OpeningstijdenComponent,
    SocialComponent,
    WatermerkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    AngularTypewriterEffectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
