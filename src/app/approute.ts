import {NgModule} from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent }         from './app.component';
import {RegistrationComponent} from './RegistrationComponent';
import {TestComponent} from './test/test.component';



export const router:Routes=[
    
        {
            path:'',
            redirectTo:'/RegistrationComponent', 
            pathMatch:'full'
        },
        { 
            path:"RegistrationComponent",
            component:RegistrationComponent
        },
        {
             path:"test",
            component:TestComponent
        }
];

@NgModule({
imports:[RouterModule.forRoot(router)],
exports :[RouterModule]
})

export class routes{

}
//yexport const routes:ModuleWithProviders=RouterModule.forRoot(router);