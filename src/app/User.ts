export class User {
	username: string = '';
	password: string = '';
  profilePhoto: string = '';
  name: string = '';
  isHacked: boolean = false;

	constructor() {
	}

	getUsername(): string {
		return this.username
	}

}
