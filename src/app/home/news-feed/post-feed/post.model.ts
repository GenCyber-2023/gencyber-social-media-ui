export class Post {
  public profilePhoto: string;
  public name: string;
  public date: string;
  public postText: string;
  public currentLikes: number;

  constructor(profilePhoto: string, name: string, date: string, postText: string, currentLikes: number) {
    this.profilePhoto = profilePhoto;
    this.name = name;
    this.date = date;
    this.postText = postText;
    this.currentLikes = currentLikes;
  }
}
