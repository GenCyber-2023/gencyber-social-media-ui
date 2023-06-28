export class Post {
  public profilePhoto: string = '';
  public username: string = '';
  public postContent: string = '';
  constructor(){
  }

  getUsername(): string {
    return this.username;
  }

  getPostContent(): string {
    return this.postContent;
  }
}
