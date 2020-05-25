import { Injectable } from "@angular/core";

export class Employee {
  id: number;
  fullName: string;
  prefix: string;
  position: string;
  expanded?: boolean;
  selected?: boolean;
  items?: Employee[];
}

var employees: Employee[] = [
  {
    id: 4,
    fullName: "Brett Wade",
    prefix: "Mr.",
    position: "IT Manager",
    expanded: true,
    items: [
      {
        id: 5,
        fullName: "Amelia Harper",
        prefix: "Mrs.",
        position: "Network Admin"
      },
      {
        id: 6,
        fullName: "Wally Hobbs",
        prefix: "Mr.",
        position: "Programmer"
      },
      {
        id: 7,
        fullName: "Brad Jameson",
        prefix: "Mr.",
        position: "Programmer"
      },
      {
        id: 8,
        fullName: "Violet Bailey",
        prefix: "Ms.",
        position: "Jr Graphic Designer"
      }
    ]
  }
];

@Injectable()
export class Service {
  getEmployees(): Employee[] {
    return employees;
  }
}
