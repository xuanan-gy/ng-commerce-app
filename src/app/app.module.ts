import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchFormComponent } from './search-form/search-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { DownloadDemoComponent } from './download-demo/download-demo.component';
import { FooterComponent } from './footer/footer.component';
import { WidgetsHeaderComponent } from './widgets-header/widgets-header.component';
import { CarouselSliderComponent } from './carousel-slider/carousel-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    NavBarComponent,
    MenuCategoryComponent,
    ProductsListComponent,
    DownloadDemoComponent,
    FooterComponent,
    WidgetsHeaderComponent,
    CarouselSliderComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
