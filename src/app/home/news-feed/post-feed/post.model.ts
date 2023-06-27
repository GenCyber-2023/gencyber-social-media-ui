export class Post {
  public profilePhoto: string = '';
  public username: string = '';
  public postText: string = '';
  constructor(){
  }
  public getUsername(): string {
    return this.username;
  }
  public getProfilePhoto(): string {
    return this.profilePhoto;
  }
  public getPostText(): string {
    return this.postText;
  }
}
