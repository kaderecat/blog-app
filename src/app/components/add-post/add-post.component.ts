import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  constructor(
    private firestore: Firestore,
    private router: Router,
    private userService : UserService,
    private postService: PostsService,
    private fireStorage: AngularFireStorage

  ) {}

  userId: string | any = '';
  user = this.userService.currentUserProfile$.subscribe(
    (user) => (this.userId = user?.uid)
  );

 async upload(event: any , f : any) {
    const { image, ...data }: Post | any = f.value;
    const file = event.target.files[0];
    if (file) {
      const path = `images/${file.name}`;
      const uploadTask = await this.fireStorage.upload(path, file);
      const url = await uploadTask.ref.getDownloadURL();
      
      this.postService.updatePost({ image: url, ...data });
    }
  }
  addPost(f: any) {
    if (!this.user) return;
    const collectionInstance = collection(this.firestore, 'posts');

    from(
      addDoc(collectionInstance, { ...f.value, uid: this.userId })
    ).subscribe(() => this.router.navigate(['posts']));
  }
}
