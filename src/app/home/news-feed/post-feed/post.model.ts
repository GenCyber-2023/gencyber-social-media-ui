export class Post {
  public profilePhoto: string = '';
  public username: string = '';
  public postText: string = '';
  constructor(){
  }

  getUsername(): string {
    return this.username;
  }

  getPostText(): string {
    return this.postText;
  }
}
