import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DateserverService } from './service/dateserver.service';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbdDatepickerIslamicumalqura } from './Datepicker/Islamic_Umm_al-Qura/datepicker-islamicumalqura';
import { NgbdDatepickerIslamiccivil } from './Datepicker/Islamic_Civil/datepicker-islamiccivil';
import { datapickerDropdownCivil } from './Datepicker/Islamic_Civil/datapicker-dropdown/datapicker-dropdown';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './components/interface/main-page/main-page.component';
import { ErrorRedirectComponent } from './components/generalComponents/error-redirect/error-redirect.component';
import { HomeComponent } from './components/mainSystem/home/home.component';
import { NavbarComponent } from './components/mainSystem/navbar/navbar.component';
import { FooterComponent } from './components/mainSystem/footer/footer.component';
import { RegistrationComponent } from './components/mainSystem/body/accounts/registration/registration.component';
import { InstAccComponent } from './components/mainSystem/body/accounts/inst-acc/inst-acc.component';
import { TrannAccComponent } from './components/mainSystem/body/accounts/trann-acc/trann-acc.component';
import { SFAccComponent } from './components/mainSystem/body/accounts/sfacc/sfacc.component';
import { AdministrationAccComponent } from './components/mainSystem/body/accounts/administration-acc/administration-acc.component';
import { AccountBodyComponent } from './components/mainSystem/body/accounts/account-body/account-body.component';
import { NewCerLicComponent } from './components/mainSystem/body/cANDlic/new-cer-lic/new-cer-lic.component';
import { CerteficatesComponent } from './components/mainSystem/body/cANDlic/certeficates/certeficates.component';
import { LicenseComponent } from './components/mainSystem/body/cANDlic/license/license.component';
import { CANDlicBodyComponent } from './components/mainSystem/body/cANDlic/c-andlic-body/c-andlic-body.component';
import { TecherCerComponent } from './components/mainSystem/body/cANDlic/certeficates/techer-cer/techer-cer.component';
import { TranerCerComponent } from './components/mainSystem/body/cANDlic/certeficates/traner-cer/traner-cer.component';
import { SuperFCerComponent } from './components/mainSystem/body/cANDlic/certeficates/super-f-cer/super-f-cer.component';
import { CQComponent } from './components/mainSystem/body/cq/cq.component';
import { AddCQComponent } from './components/mainSystem/body/CQ/add-cq/add-cq.component';
import { ViowCQComponent } from './components/mainSystem/body/CQ/viow-cq/viow-cq.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ErrorRedirectComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    RegistrationComponent,
    InstAccComponent,
    TrannAccComponent,
    SFAccComponent,
    AdministrationAccComponent,
    AccountBodyComponent,
    NewCerLicComponent,
    CerteficatesComponent,
    LicenseComponent,
    CANDlicBodyComponent,
    TecherCerComponent,
    TranerCerComponent,
    SuperFCerComponent,
    CQComponent,
    AddCQComponent,
    ViowCQComponent,
    NgbdDatepickerIslamicumalqura,
    NgbdDatepickerIslamiccivil,
    datapickerDropdownCivil
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [DateserverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
