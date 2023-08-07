import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/home/home.component';
import { CarouselModule } from '@coreui/angular';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports : [HomeComponent]
})
export class CoreModule { }
