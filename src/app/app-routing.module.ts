import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { TechniquesComponent } from './pages/techniques/techniques.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { MeditationDetailComponent } from './components/meditation-detail/meditation-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RedirectComponent } from './pages/redirect/redirect.component';
import { canActivateIfAuthenticated } from './auth.guard';
import { AjoutTechniqueComponent } from './components/ajout-technique/ajout-technique.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: PageHomeComponent },
  { path: 'guide', component: TechniquesComponent, canActivate: [canActivateIfAuthenticated] },

  { path: 'profil', component: ProfilComponent, canActivate: [canActivateIfAuthenticated] },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'in', component: InscriptionComponent },
  { path: 'meditation/:id', component: MeditationDetailComponent },
  { path: 'redirect', component: RedirectComponent},
  { path: 'ajout-technique', component: AjoutTechniqueComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
