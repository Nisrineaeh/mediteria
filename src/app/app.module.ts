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
import { JournalComponent } from './components/journal/journal.component';
import { MeditationDetailComponent } from './components/meditation-detail/meditation-detail.component';
import { ArticleComponent } from './components/article/article.component';
import { LaundingComponent } from './components/launding/launding.component'; 
import { ModalInscriptionComponent } from './components/modal-inscription/modal-inscription.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TechListComponent } from './components/tech-list/tech-list.component';
import { CardComponent } from './components/card/card.component';
import { RedirectComponent } from './pages/redirect/redirect.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHomeComponent,
    TechniquesComponent,
    ProfilComponent,
    InscriptionComponent,
    NotFoundComponent,
    ConnexionComponent,
    JournalComponent,
    MeditationDetailComponent,
    ArticleComponent,
    LaundingComponent,
    ModalInscriptionComponent,
    TechListComponent,
    CardComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
