import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { TechniquesComponent } from './pages/techniques/techniques.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHomeComponent,
    TechniquesComponent,
    ProfilComponent,
    InscriptionComponent,
    NotFoundComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
