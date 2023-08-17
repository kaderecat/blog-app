import { Component, Input, OnInit } from '@angular/core';

import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostsService) {}
  @Input() isHome!: boolean;
  posts: any;

  ngOnInit(): void {
    if (this.isHome) {
      this.postService
        .getPosts()
        .subscribe((val) => (this.posts = val.slice(-6)));
    } else {
      this.postService.getPosts().subscribe((val) => (this.posts = val));
    }
  }

  searchText: string = '';

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }
}
