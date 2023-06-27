import {Component, Input, OnInit} from '@angular/core';
import {Post} from "./post.model";
import {PostsService} from "../../../posts.service";


@Component({
  selector: 'app-post-feed',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  public post: Post = new Post();
  constructor(public postService: PostsService) { }
  ngOnInit(): void {
    this.postService.getPost();
  }
}
