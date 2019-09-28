import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DiagnosisComponent} from './diagnosis/diagnosis.component';
import {TimelineComponent} from './timeline/timeline.component';
import {LandingComponent} from './layout/landing/landing.component';

const routes: Routes = [
  {path: 'diagnosis', component: DiagnosisComponent},
  {path: 'timeline', component: TimelineComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},,
  {path: '**', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
