import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { HomepageComponent } from './modules/homepage/homepage.component';

const appRoutes: Routes = [
    {
      path:'',
      redirectTo:'/homepage',
      pathMatch:'full'
    },
    {
      path:'homepage',
      component: HomepageComponent,
      data:{title:'Home Page'}
    }
  ];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })

  
  export class AppRoutingModule {}