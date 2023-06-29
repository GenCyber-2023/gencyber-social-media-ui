export class User {
	username: string = '';
	password: string = '';
  profilePhoto: string = '';
  name: string = '';

	constructor() {
	}

	getUsername(): string {
		return this.username
	}

}
