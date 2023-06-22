import {Component, Input, OnInit} from '@angular/core';
import {Post} from "./post.model";


@Component({
  selector: 'app-post-feed',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  // @ts-ignore
  public post: Post;

  constructor() { }

  ngOnInit(): void {
  }
}
