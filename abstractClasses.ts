abstract class Employee3 {
  constructor(private firstName: string, private lastName: string) {}
  abstract getSalary(): number;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  compensationStatement(): string {
    return `${this.firstName} makes ${this.getSalary()} a month`;
  }

  // abstract classes cannot be instantiated
}

// let employee = new Employee3('John', 'Doe');

class FullTimeEmployee extends Employee3 {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.salary;
  }
}

class Contractor extends Employee3 {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.rate * this.hours;
  }
}

let person = {
  name: 'haitham',
  age: 26,
};

if ('address' in person) {
  throw new Error('property not in object');
}

class Customer2 {
  isCreditAllowed(): boolean {
    // ...
    return true;
  }
}

// User-Defined Type Guards
function isCustomer(partner: any): partner is Customer {
  return partner instanceof Customer2;
}
