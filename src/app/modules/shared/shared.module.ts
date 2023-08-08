import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent,],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule
  ],
  exports : [NavbarComponent]
})
export class SharedModule { }
