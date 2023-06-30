import { Component, Input, OnInit } from '@angular/core';
import { Post } from "./post.model";
import { PostsService } from "../../../posts.service";
import { UserService } from "../../../user.service";
import { User } from "../../../User";

@Component({
  selector: 'app-post-feed',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post = new Post();
  @Input() posts: Post[] = [];
  users: User[] = [];
  userPicture: string = this.getUserPicture();

  constructor(private postService: PostsService, public userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (users) => {
        this.users = users;
        this.fetchPostsAndUserPicture();
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }

  fetchPostsAndUserPicture() {
    this.postService.getAllPosts().subscribe(
      (posts) => {
        this.posts = posts;
        this.userPicture = this.getUserPicture();
      },
      (error) => {
        console.error("Error fetching posts", error);
      }
    );
  }

  getUserPicture(): string {
    let pictureUrl = '';
    console.log(this.posts);
    console.log(this.users);
      for (let i = 0; i < this.users.length; i++) {
        for (let j = 0; j < this.posts.length; j++) {
          if (this.users[i].username === this.posts[j].username) {
            pictureUrl = this.users[i].profilePhoto.toString();
            return pictureUrl;
          }
        }
      }
    return "no posts";
  }
}
