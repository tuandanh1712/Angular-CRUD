export class contact {
  firstname?: string;
  lastname?: string;
  phonenumber?: number;
  city?: string;
  id?: number;
}
export class signup {
  constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}
}
export class login {
  constructor(public email: string, public password: string) {}
}
