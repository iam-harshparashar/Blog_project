import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SingleviewComponent } from './singleview/singleview.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo:'blogs', pathMatch:'full' },
  { path: 'blogs', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'single-view', component: SingleviewComponent },
  { path: 'login', component: LoginComponent},
  { path: 'admin-dashboard', component: AdmindashboardComponent, canActivate:[AuthGuard]},
  { path: '**', redirectTo:'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
