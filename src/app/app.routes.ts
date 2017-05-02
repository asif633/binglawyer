import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ListingcontainerComponent } from './client/listingpage/listingcontainer.component';
import { LawyermainComponent } from './lawyer/lawyermain/lawyermain.component';
import { AdminmainComponent } from './admin/adminmain/adminmain.component';
import { ClientmainComponent } from './client/clientmain.component';
import { LawyerdetailcontainerComponent } from './client/lawyerdetailpage/lawyerdetailcontainer.component';

const appRoutes: Routes = [
    {path: '', component: AppComponent ,children:[
      {path: '', component: ClientmainComponent, children: [
        {path:'lawyerlisting', component: ListingcontainerComponent},
        {path:'lawyerdetail', component: LawyerdetailcontainerComponent},
      ]},
      {path: 'lawyer', component:LawyermainComponent},
      {path: 'admin', component: AdminmainComponent}
    ]}
    
]

export const routes = RouterModule.forRoot(appRoutes, {useHash: false});