// intersection types creates a new type by combining
// multiple existing types

interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Contact & Identity;
type Customer = BusinessPartner & Contact;

// never type
// you can assign the never type to functions that
// never return a value, like error thrower functions

function raiseError(message: string): never {
  throw new Error(message);
}

// tuples
let skill: [string, number];
skill = ['Programming', 5];
