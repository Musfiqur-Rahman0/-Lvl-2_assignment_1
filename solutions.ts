// Problem 1

// Sample Input:

const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};

const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(result); // Output: [2, 4, 6]

// Problem 2
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};
// Sample Input:
const reversed = reverseString("typescript");

// Sample Output:
// ("tpircsepyt");

// Problem 3

const checkType = (value: unknown): string => {
  if (typeof value === "string") {
    return "String";
  }
  if (typeof value === "number") {
    return "Number";
  }
  return "Unknown";
};

// Sample Input 1:
const res1 = checkType("Hello");

// Sample Output 1:
// ("String");
// Sample Input 2:
const res2 = checkType(42);
// Sample Output 2:
// ("Number");

// Problem 4

// Sample Input:
const user = { id: 1, name: "John Doe", age: 21 };

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const name1 = getProperty(user, "name");

// Sample Output:
// ("John Doe");

// Problem 5

// Sample Input:
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const toggleReadStatus = (book: {
  title: string;
  author: string;
  publishedYear: number;
  isRead?: boolean;
}): object => {
  book.isRead = !book.isRead;
  return book;
};

const obj = toggleReadStatus(myBook);
// console.log(obj);
// Sample Output:
// {
//   title: "TypeScript Guide",
//   author: "Jane Doe",
//   publishedYear: 2024,
//   isRead: true
// }

// problem 6
// Sample Input:

class Student {
  name: string;
  age: number;
  grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");

student.getDetails();

// Sample Output:
// "Name: Alice, Age: 20, Grade: A";

// Problem 7

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((value) => arr2.includes(value));
};

// Sample Input:
const intersection = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
// Sample Output:
//   (3, 4, 5)
// console.log(intersection);
