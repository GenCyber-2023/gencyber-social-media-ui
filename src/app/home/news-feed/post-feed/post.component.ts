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
  userPicture: string = this.getUserPicture(this.post);

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
        this.userPicture = this.getUserPicture(this.post);
      },
      (error) => {
        console.error("Error fetching posts", error);
      }
    );
  }

  getUserPicture(post: Post): string {
    const user = this.users.find((user) => user.username === post.username);
    if (user) {
      return user.profilePhoto.toString();
    }
    return "no picture";
  }
}
