import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {
  Firestore,
  addDoc,
  collection,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  constructor(
    private firestore: Firestore,
    private router: Router,
    private userService: UserService,
    private fireStorage: AngularFireStorage,
    private snack: MatSnackBar,
    private postsService: PostsService,
    private act: ActivatedRoute
  ) {}
  post: any = '';
  url = '';
  userId: string | any = '';
  username: string | any = '';
  user = this.userService.currentUserProfile$.subscribe(
    (user) => ((this.userId = user?.uid), (this.username = user?.displayName))
  );

  async upload(event: any) {
    const file = event.target.files[0];
    this.snack.open('Uploading image...', 'OK  ', {
      duration: 5000,
    });
    if (file) {
      const path = `images/${file.name}`;
      const uploadTask = await this.fireStorage.upload(path, file);
      this.url = await uploadTask.ref.getDownloadURL();
    }
  }

  EditPost(f: any) {
    const id: string | null = this.act.snapshot.paramMap.get('id');
    console.log(f.value);

    const ref = doc(this.firestore, `posts/${id}`);
    return from(updateDoc(ref, { ...f.value, image: this.url })).subscribe(() =>
      this.router.navigate(['posts'])
    );
  }
  ngOnInit(): void {
    const id: string | null = this.act.snapshot.paramMap.get('id');
    this.postsService
      .loadOne(id)
      .subscribe((val) => ((this.post = val), (this.url = this.post.image)));
  }
}
