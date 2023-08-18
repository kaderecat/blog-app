import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon'
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [NavbarComponent,FooterComponent,ModalComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  exports : [NavbarComponent, FooterComponent]
})
export class SharedModule { }
