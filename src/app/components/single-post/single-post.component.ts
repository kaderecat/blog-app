import { Component, OnInit } from '@angular/core';
import { Firestore, docData, doc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent implements OnInit {
  constructor(
    private act: ActivatedRoute,
    private postService: PostsService,
    private userService: UserService
  ) {}
  user$ = this.userService.currentUserProfile$;
  userid: any = '';
  postId: any = '';
  post: any;
  isOwner: boolean = false;

  ngOnInit(): void {
    const id: string | null = this.act.snapshot.paramMap.get('id');
    this.userid = localStorage.getItem('user');
    this.postService.loadOne(id).subscribe((val) => {
      this.post = val;

      this.postId = val.uid;

      if (this.postId === this.userid) {
        this.isOwner = true;
      }
      console.log(this.isOwner);
    });
  }
}
