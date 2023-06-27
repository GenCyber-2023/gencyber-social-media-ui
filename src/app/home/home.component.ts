import {Component, OnInit} from '@angular/core';
import {Post} from "./news-feed/post-feed/post.model";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(public postService: PostsService) {
  }
  public newsFeedPosts: Post[] = [];
  getAllPosts(): void {
    this.postService.getAllPosts().subscribe(newsFeedPosts => this.newsFeedPosts = newsFeedPosts);
  }

  ngOnInit(): void {
    this.getAllPosts();
  }
}
