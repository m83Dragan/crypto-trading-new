import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLandingComponent } from './page-landing/page-landing.component';

const routes: Routes = [
	{ path: '', component: PageLandingComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
