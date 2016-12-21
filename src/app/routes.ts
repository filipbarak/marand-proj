/**
 * Created by Filip on 12/21/2016.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserDetailsFormComponent} from "./Components/user-details-form/user-details-form.component";

const appRoutes: Routes = [

  {
    path: '',
    redirectTo: '/forms',
    pathMatch: 'full'
  },

  {
    path: 'forms',
    component: UserDetailsFormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

