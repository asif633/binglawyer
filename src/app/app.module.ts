import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ListingcontainerComponent } from './client/listingpage/listingcontainer.component';
import { FilterleftComponent } from './client/listingpage/filterleft/filterleft.component';
import { QueryrightComponent } from './client/listingpage/queryright/queryright.component';
import { LawyerlistingComponent } from './client/listingpage/lawyerlisting/lawyerlisting.component';
import { LawyercardComponent } from './client/listingpage/lawyerlisting/lawyercard/lawyercard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminmainComponent } from './admin/adminmain/adminmain.component';
import { LawyermainComponent } from './lawyer/lawyermain/lawyermain.component';
import { ClientmainComponent } from './client/clientmain.component';
import { LawyerdetailcontainerComponent } from './client/lawyerdetailpage/lawyerdetailcontainer.component';
import { LawyerdetailComponent } from './client/lawyerdetailpage/lawyerdetail/lawyerdetail.component';
import { EnquiryComponent } from './client/lawyerdetailpage/enquiry/enquiry.component';

export const fireConfig = {
  apiKey: "AIzaSyD8ffkko4dHn9uo9NKeQzaVNK19OsFc9W4",
  authDomain: "binglawyer-70633.firebaseapp.com",
  databaseURL: "https://binglawyer-70633.firebaseio.com",
  projectId: "binglawyer-70633",
  storageBucket: "binglawyer-70633.appspot.com",
  messagingSenderId: "123231064153"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    ListingcontainerComponent,
    FilterleftComponent,
    QueryrightComponent,
    LawyerlistingComponent,
    LawyercardComponent,
    NavbarComponent,
    AdminmainComponent,
    LawyermainComponent,
    ClientmainComponent,
    LawyerdetailcontainerComponent,
    LawyerdetailComponent,
    EnquiryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    AngularFireModule.initializeApp(fireConfig, myFirebaseAuthConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
