import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  slides: any
  isHome : boolean = true
  constructor(private postService : PostsService){}

  


ngOnInit(): void {
  this.postService.getPosts().subscribe((val) => {
 this.slides = val.slice(-3)
})
}


}