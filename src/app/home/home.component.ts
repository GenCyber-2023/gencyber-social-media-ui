import {Component, OnInit} from '@angular/core';
import {Post} from "./news-feed/post-feed/post.model";
import {PostsService} from "../posts.service";
import {UserService} from "../user.service";
import {User} from "../User";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(public postService: PostsService, public userService:UserService) {
  }
  public newsFeedPosts: Post[] = [];
  public users: User[] = [];

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }
  getAllPosts(): void {
    this.postService.getAllPosts().subscribe(newsFeedPosts => this.newsFeedPosts = newsFeedPosts);
  }

  isLoggedIn() {
    this.userService.isLoggedIn();
  }

  ngOnInit(): void {
    this.getAllPosts();
    this.getAllUsers();
  }
}
