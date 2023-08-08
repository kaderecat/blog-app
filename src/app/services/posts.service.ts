import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Observable, from } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private firestore: Firestore,
    private auth: AuthenticationService) { }


  updatePost(post: Post): Observable<void> {
    console.log(post);
    
    const ref = doc(this.firestore, 'posts', post.postId);
    return from(updateDoc(ref, { ...post }));
  }
}
