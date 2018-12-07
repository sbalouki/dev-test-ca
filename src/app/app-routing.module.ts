import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JsConnaissanceComponent } from './js-connaissance/js-connaissance.component';
import { JsModelisationComponent } from './js-modelisation/js-modelisation.component';
import { JsProblemesComponent } from './js-problemes/js-problemes.component';
import { PhpConnaissanceComponent } from './php-connaissance/php-connaissance.component';
import { PhpModelisationComponent } from './php-modelisation/php-modelisation.component';
import { PhpProblemesComponent } from './php-problemes/php-problemes.component';
import { SqlConnaissanceComponent } from './sql-connaissance/sql-connaissance.component';
import { SqlModelisationComponent } from './sql-modelisation/sql-modelisation.component';
import { SqlProblemesComponent } from './sql-problemes/sql-problemes.component';
import { CSharpComponent } from './c-sharp/c-sharp.component';
import { AngularjsComponent } from './angularjs/angularjs.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'js-connaissance', component: JsConnaissanceComponent },
  { path: 'js-modelisation', component: JsModelisationComponent },
  { path: 'js-problemes', component: JsProblemesComponent },
  { path: 'php-connaissance', component: PhpConnaissanceComponent },
  { path: 'php-modelisation', component: PhpModelisationComponent },
  { path: 'php-problemes', component: PhpProblemesComponent },
  { path: 'sql-connaissance', component: SqlConnaissanceComponent },
  { path: 'sql-modelisation', component: SqlModelisationComponent },
  { path: 'sql-problemes', component: SqlProblemesComponent },
  { path: 'c-sharp', component: CSharpComponent },
  { path: 'angularjs', component: AngularjsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
