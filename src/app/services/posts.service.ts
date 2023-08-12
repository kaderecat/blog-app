import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Observable, from } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  updateDoc,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    private firestore: Firestore,
    private router: Router,
    private userService: UserService
  ) {}

  userId: string | any = '';
  posts: any = [];
  user = this.userService.currentUserProfile$.subscribe(
    (user) => (this.userId = user?.uid)
  );

  updatePost(post: Post): Observable<void> {
    const ref = doc(this.firestore, 'posts');
    return from(updateDoc(ref, { ...post }));
  }
  loadOne(id: string | any) {
    const docc = doc(this.firestore, `posts/${id}`);
    return docData(docc);
  }

  addPost(f: any) {
    if (!this.user) return;
    const collectionInstance = collection(this.firestore, 'posts');

    from(
      addDoc(collectionInstance, { ...f.value, uid: this.userId })
    ).subscribe(() => this.router.navigate(['posts']));
  }

  getPosts() {
    const collectionInstance = collection(this.firestore, 'posts');

    return collectionData(collectionInstance, { idField: 'id' });
  }

  deletePost(id : string | any) {
    const docc = doc(this.firestore, `posts/${id}`);
    return deleteDoc(docc) 
  }
}
