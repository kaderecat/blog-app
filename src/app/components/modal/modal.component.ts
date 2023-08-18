import { Component , Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) private data: {id: string},   private postService: PostsService,
  private router: Router,
  private snack: MatSnackBar,){

  }


  deletePost() {
    this.snack.open('The post was deleted', 'X', { duration: 1000 });
    
    this.postService.deletePost(this.data.id).then(() => this.router.navigate(['my-posts']));
  }
}
