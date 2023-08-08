import { Component, OnInit } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(
    private firestore: Firestore
  ) {
  }

  posts: any;
  getPosts() {
    const collectionInstance = collection(this.firestore, 'posts');

    collectionData(collectionInstance , {idField : 'id'}).subscribe((val) => (
      
      this.posts = val));
    return this.posts;
  }

  ngOnInit(): void {
    this.getPosts()

  }
}