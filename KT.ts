class User {
  public static count: number = 0;
  public name: string;
  public login: string;
  private _password: string;
  private _grade: number;

  constructor(name: string, login: string, password: string, grade: number) {
    this.name = name;
    this.login = login;
    this._password = password;
    this._grade = grade;
    User.count++;
  }

  public showInfo(): void {
    console.log(`Name: ${this.name}, Login: ${this.login}`);
  }

  public eq(other: User): boolean {
    return this._grade === other._grade;
  }

  public lt(other: User): boolean {
    return this._grade < other._grade;
  }

  public gt(other: User): boolean {
    return this._grade > other._grade;
  }

  get password(): string {
    return '********';
  }

  set password(value: string) {
    this._password = value;
  }

  get grade(): string {
    return "Неизвестное свойство grade";
  }
}

class SuperUser extends User {
  public static count: number = 0;
  public role: string;

  constructor(name: string, login: string, password: string, role: string, grade: number) {
    super(name, login, password, grade);
    this.role = role;
    SuperUser.count++;
  }

  public showInfo(): void {
    console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this.role}`);
  }
}

const user1 = new User('User1', 'user1', '1234', 1);
const user2 = new User('User2', 'user2', '5678', 2);
const user3 = new User('User3', 'user3', '9101', 3);
const admin = new SuperUser('User4', 'user4', '0000', 'admin', 4);

user1.showInfo();
admin.showInfo();

const users = User.count;
const admins = SuperUser.count;

console.log(`Всего обычных пользователей: ${users}`);
console.log(`Всего супер-пользователей: ${admins}`);

console.log(user1.lt(user2));
console.log(admin.gt(user3));
console.log(user1.eq(user3));

user3.name = 'Ringo Starr';
user1.password = 'Pa$$w0rd';

console.log(user3.name);
console.log(user2.password);
console.log(user2.login);
