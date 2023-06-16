import { Component } from '@angular/core';
import {Post} from "./news-feed/post-feed/post.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public newsFeedPosts: Post[] = [];

  ngOnInit(): void{
    this.newsFeedPosts = [
      {
        profilePhoto: "picture",
        name: "name",
        date: "today's date",
        postText: "text",
        currentLikes: 1,
      } as Post,
      {
        profilePhoto: "picture",
        name: "name",
        date: "today's date",
        postText: "text",
        currentLikes: 1,
      } as Post,
      {
        profilePhoto: "picture",
        name: "name",
        date: "today's date",
        postText: "text",
        currentLikes: 1,
      } as Post,
    ];
  }
}
