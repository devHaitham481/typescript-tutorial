class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  describe(): string {
    return `This is ${this.firstName} ${this.lastName}`;
  }
}

class Employee2 extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    console.log('hi');

    super(firstName, lastName);
  }

  describe(): string {
    return super.describe() + `I'm a ${this.jobTitle}`;
  }
}

let employee = new Employee2('Haitham', 'Maryan', 'Front end Developer');
employee.describe();
