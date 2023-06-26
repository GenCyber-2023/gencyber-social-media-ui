export class User {
	username: string = '';
	password: string = '';
  profilePictureURL: string = '';
  name: string = '';

	constructor() {
	}

	getUsername(): string {
		return this.username
	}
	getPassword(): string {
		return this.password
	}
  getProfilePicture(): string {
    return this.profilePictureURL;
  }
  setProfilePicture(profilePictureURL: string): void {
    this.profilePictureURL = profilePictureURL;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
	isValid(): boolean {
		return this.username !== null
	}
}
