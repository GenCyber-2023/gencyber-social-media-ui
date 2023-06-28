import {Component, Input} from '@angular/core';
import { Post } from "./post.model";
import { PostsService } from "../../../posts.service";

@Component({
  selector: 'app-post-feed',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post: Post = new Post();

  constructor(private postService: PostsService) { }

  ngOnInit() {
    return this.postService.getPost().getPostContent() && this.postService.getPost().getUsername();
  }

}
