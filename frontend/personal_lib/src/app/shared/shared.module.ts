import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CrudService } from "./crud.service";
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    CarouselComponent
  ],
  exports: [
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    CrudService,
  ],
  bootstrap: []
})
export class SharedModule { }
