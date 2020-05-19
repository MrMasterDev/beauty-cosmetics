import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { MainPageComponent } from './pages/main-page/main-page.component';



import { BrandsComponent } from './pages/brands/brands.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { SeminarsComponent } from './pages/seminars/seminars.component'
import { EventsComponent } from './pages/events/events.component';
import { XcelensComponent } from './pages/brands/xcelens/xcelens.component';
import { Xcelens3DetailsComponent } from './pages/brands/xcelens/xcelens3-details/xcelens3-details.component';
import { GenyalComponent } from './pages/brands/genyal/genyal.component';
import { MelsmonComponent } from './pages/brands/melsmon/melsmon.component';
import { DensityComponent } from './pages/brands/density/density.component';
import { EjalComponent } from './pages/brands/ejal/ejal.component';
import { PeptidyalComponent } from './pages/brands/peptidyal/peptidyal.component';
import { Peptidyal115Component } from './pages/brands/peptidyal115/peptidyal115.component';
import { HyaminoComponent } from './pages/brands/hyamino/hyamino.component';
import { DoublyxComponent } from './pages/brands/doublyx/doublyx.component';
import { Peptidyal2Component } from './pages/brands/peptidyal2/peptidyal2.component';
import { Jpx3bioComponent } from './pages/brands/jpx3bio/jpx3bio.component';
import { MakropeelComponent } from './pages/brands/makropeel/makropeel.component';
import { Xcelens4DetailsComponent } from './pages/brands/xcelens/xcelens4-details/xcelens4-details.component';
import { TandemsComponent } from './pages/seminars/tandems/tandems.component';
import { RinoplasticComponent } from './pages/seminars/rinoplastic/rinoplastic.component';
import { ComplicationsComponent } from './pages/seminars/complications/complications.component';
import { ModelingComponent } from './pages/seminars/modeling/modeling.component';

import { FilterBySearchPipe } from './shared/pipes/filterBySearch/filter-by-search.pipe';
import { SearchComponent } from './pages/search/search.component';
import { GenyalVolumeComponent } from './pages/brands/genyal/genyal-volume/genyal-volume.component';
import { GenyalGenyaliftComponent } from './pages/brands/genyal/genyal-genyalift/genyal-genyalift.component';
import { GenyalPolyvalentComponent } from './pages/brands/genyal/genyal-polyvalent/genyal-polyvalent.component';







@NgModule({
  declarations: [AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    AboutComponent,
    FilterBySearchPipe,

    MainComponent,
    NavComponent,
    MainPageComponent,
    BrandsComponent,
    CatalogComponent,
    SeminarsComponent,
    EventsComponent,
    XcelensComponent,
    Xcelens3DetailsComponent,
    MelsmonComponent,
    DensityComponent,
    EjalComponent,
    PeptidyalComponent,
    Peptidyal115Component,
    HyaminoComponent,
    DoublyxComponent,
    Peptidyal2Component,
    Jpx3bioComponent,
    MakropeelComponent,
    Xcelens4DetailsComponent,
    TandemsComponent,
    RinoplasticComponent,
    ComplicationsComponent,
    ModelingComponent,
    SearchComponent,
    GenyalComponent,
    GenyalVolumeComponent,
    GenyalGenyaliftComponent,
    GenyalPolyvalentComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
   
    
  ],
  entryComponents: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
