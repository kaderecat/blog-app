import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [NavbarComponent,],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports : [NavbarComponent]
})
export class SharedModule { }
