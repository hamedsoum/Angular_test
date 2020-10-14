import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageDacComponent } from './page-dac/page-dac.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { InscriptionComponent } from './auth/inscription/inscription.component';


const appRoutes : Routes = [
  {path:'auth/connexion', component:ConnexionComponent},
  {path:'auth/inscription', component: InscriptionComponent},
  {path: 'page-dac', component: PageDacComponent},
  {path: 'auth', component: AuthComponent},
  {path:'', component: PageDacComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PageDacComponent,
    AuthComponent,
    ConnexionComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
