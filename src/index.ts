class User {
    private static userType: string = "Generic";
    private _email: string;

    public username: string;
    public addressLine1: string = "";
    public addressLine2: string = "";
    public country: string = "";

    constructor(username: string, email: string) {
        this.username = username;
        this._email = email;
    }

    public get userType() {
        return User.userType;
    }

    public get email() {
        return this._email;
    }

    public set email(newEmail: string) {
        this._email = newEmail;
    }

    public address(): any {
        return `${this.addressLine1}\n${this.addressLine2}\n${this.country}`;
    }
}

const p = new User("exampleUser", "example@exmaple.com");
p.addressLine1 = "1, New Avenue";
p.addressLine2 = "Bahcelievler, Istanbul";

console.log(p)