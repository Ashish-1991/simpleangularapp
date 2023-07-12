import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UservalidationComponent } from './uservalidation/uservalidation/uservalidation.component';
import { MyformComponent } from './userinput/myform/myform.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path:'uservalidation',component:UservalidationComponent},
	{ path:'myform',component:MyformComponent},
  { path:'**',component:NotfoundComponent},
  // { path:'/myform',component:MyformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
