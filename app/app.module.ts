import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';

import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { BikeComponent } from './components/bike/bike.component';
import { ComparatorComponent } from './components/comparator/comparator.component';
import { ManufacturerComponent } from './components/manufacturer/manufacturer.component';
import { ManufacturersComponent } from './components/manufacturers/manufacturers.component';
import { NewsComponent } from './components/news/news.component';
import { ResearchComponent } from './components/research/research.component';

import { CardManufacturerComponent } from './components/manufacturers/card/card-manufacturer.component';
import { CardBikeComponent } from './components/manufacturer/card/card-bike.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';

import { AppService } from './services/app.service';

import { ImgUrlPipe } from './pipes/img-url.pipe';
import { WhitespaceTodashPipe } from './pipes/whitespace-todash.pipe';
import { FilterManufacturerPipe } from './pipes/filter-manufacturer.pipe';
import { FilterBikePipe } from './pipes/filter-bike.pipe';
import { OrderByPipe } from './pipes/orderby.pipe';
import { FilterBikeCategPipe } from './pipes/filter-bike-categ.pipe';

import { CardDirective } from './directives/card.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    MainComponent,
    HomeComponent,
    BikeComponent,
    ComparatorComponent,
    ManufacturerComponent,
    ManufacturersComponent,
    NewsComponent,
    ResearchComponent,
    ImgUrlPipe,
    WhitespaceTodashPipe,
    FilterManufacturerPipe,
    FilterBikePipe,
    OrderByPipe,
    FilterBikeCategPipe,
    CardDirective,
    CardManufacturerComponent,
    CardBikeComponent,
    CarouselComponent
  ],
  providers: [
    AppService
  ],
  bootstrap: [
    MainComponent
  ]
})
export class AppModule { }
