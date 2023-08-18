import { Component, OnInit } from '@angular/core';
import { Firestore, docData, doc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent implements OnInit {
  constructor(
    private act: ActivatedRoute,
    private postService: PostsService,
    private userService: UserService,
    private router: Router,
    private snack: MatSnackBar,
    private dialog : MatDialog
  ) {}
  user$ = this.userService.currentUserProfile$;
  userid: any = '';
  postId: any = '';
  id : any = '';
  post: any;
  isOwner: boolean = false;

  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    this.userid = localStorage.getItem('user');
    this.postService.loadOne(this.id).subscribe((val) => {
      this.post = val;

      this.postId = val.uid;

      if (this.postId === this.userid) {
        this.isOwner = true;
      }
    });
  }

  openDialog(){
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {id: this.id}}) ;

  }
  }
