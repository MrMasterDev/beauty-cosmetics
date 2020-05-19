import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

import { BrandsComponent } from './pages/brands/brands.component';
import { XcelensComponent } from './pages/brands/xcelens/xcelens.component';
import { Xcelens3DetailsComponent } from './pages/brands/xcelens/xcelens3-details/xcelens3-details.component';
import { Xcelens4DetailsComponent } from './pages/brands/xcelens/xcelens4-details/xcelens4-details.component';
import { GenyalComponent } from './pages/brands/genyal/genyal.component';
import { DensityComponent } from './pages/brands/density/density.component';
import { EjalComponent } from './pages/brands/ejal/ejal.component';
import { HyaminoComponent } from './pages/brands/hyamino/hyamino.component';
import { DoublyxComponent } from './pages/brands/doublyx/doublyx.component';
import { Jpx3bioComponent } from './pages/brands/jpx3bio/jpx3bio.component';
import { MakropeelComponent } from './pages/brands/makropeel/makropeel.component';
import { PeptidyalComponent } from './pages/brands/peptidyal/peptidyal.component';
import { Peptidyal2Component } from './pages/brands/peptidyal2/peptidyal2.component';
import { Peptidyal115Component } from './pages/brands/peptidyal115/peptidyal115.component';
import { MelsmonComponent } from './pages/brands/melsmon/melsmon.component';
import { GenyalVolumeComponent } from './pages/brands/genyal/genyal-volume/genyal-volume.component';
import { GenyalGenyaliftComponent } from './pages/brands/genyal/genyal-genyalift/genyal-genyalift.component';
import { GenyalPolyvalentComponent } from './pages/brands/genyal/genyal-polyvalent/genyal-polyvalent.component';


import { CatalogComponent } from './pages/catalog/catalog.component';
import { SeminarsComponent } from './pages/seminars/seminars.component';
import { EventsComponent } from './pages/events/events.component';

import { ComplicationsComponent } from './pages/seminars/complications/complications.component';
import { ModelingComponent } from './pages/seminars/modeling/modeling.component';
import { RinoplasticComponent } from './pages/seminars/rinoplastic/rinoplastic.component';
import { TandemsComponent } from './pages/seminars/tandems/tandems.component';

import { SearchComponent } from './pages/search/search.component';




const routes: Routes = [
  {
    path: 'about', component: AboutComponent
    
  },
  { path: 'pages/search', component: SearchComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'seminars', component: SeminarsComponent },
  { path: 'events', component: EventsComponent},
  { path: 'brands/genyal', component: GenyalComponent },
  { path: 'brands/genyal/genyal-volume', component: GenyalVolumeComponent },
  { path: 'brands/genyal/genyal-polyvalent', component: GenyalPolyvalentComponent },
  { path: 'brands/genyal/genyal-genyalift', component: GenyalGenyaliftComponent },
  { path: 'brands/xcelens', component: XcelensComponent },
  { path: 'brands/xcelens/xcelens3-details', component: Xcelens3DetailsComponent },
  { path: 'brands/xcelens/xcelens4-details', component: Xcelens4DetailsComponent },
  { path: 'brands/density', component: DensityComponent },
  { path: 'brands/ejal', component: EjalComponent },
  { path: 'brands/hyamino', component: HyaminoComponent },
  { path: 'brands/doublyx', component: DoublyxComponent },
  { path: 'brands/jpx3bio', component: Jpx3bioComponent },
  { path: 'brands/makropeel', component: MakropeelComponent },
  { path: 'brands/peptidyal', component: PeptidyalComponent },
  { path: 'brands/peptidyal2', component: Peptidyal2Component },
  { path: 'brands/peptidyal115', component: Peptidyal115Component },
  { path: 'brands/melsmon', component: MelsmonComponent },
  { path: 'seminars/complications', component: ComplicationsComponent },
  { path: 'seminars/modeling', component: ModelingComponent },
  { path: 'seminars/rinoplastic', component: RinoplasticComponent },
  { path: 'seminars/tandems', component: TandemsComponent },
  { path: '**', component: PageNotFoundComponent }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
