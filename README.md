# Assignment 01: Solving Problems with TypeScript

This assignment was my first serious hands-on practice with TypeScript. Before starting, I already knew basic JavaScript, but TypeScript felt different because I had to think carefully about types, return values, and how data moves through functions. While solving these problems, I tried not to just “make the code work,” but also understand why TypeScript is useful compared to plain JavaScript.

I’ll explain each problem step by step, including the approach I used and what I learned while solving it.

---

# Problem 1: Filtering Even Numbers

For the first problem, I needed to return only the even numbers from an array. Since JavaScript already provides the `filter()` method, I used that along with the modulo operator `%`.

```typescript
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};
```

### How I approached it

My idea was simple:

- Loop through every number in the array
- Check if the remainder after dividing by `2` is `0`
- If true, keep the number

The `filter()` method automatically creates a new array containing only the matching values.

### What I learned

This problem helped me understand how TypeScript handles arrays with types. By writing `number[]`, I clearly define that the function only accepts an array of numbers.

It also showed me that TypeScript makes functions more predictable because both the input and return type are visible immediately.

---

# Problem 2: Reversing a String

In this problem, I had to reverse a string. I used a common JavaScript technique:

1. Convert the string into an array
2. Reverse the array
3. Join it back into a string

```typescript
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};
```

### How I approached it

At first, I thought about using a loop manually, but using built-in methods made the code cleaner and easier to read.

- `split("")` converts the string into characters
- `reverse()` reverses the array
- `join("")` combines everything again

### What I learned

Even though the logic was simple, TypeScript still improves readability because the function clearly says:

- Input must be a string
- Output will also be a string

This becomes very helpful when projects become larger.

---

# Problem 3: Checking Types with `unknown`

This problem was more interesting because I had to work with the `unknown` type.

```typescript
const checkType = (value: unknown): string => {
  if (typeof value === "string") {
    return "String";
  }

  if (typeof value === "number") {
    return "Number";
  }

  return "Unknown";
};
```

### How I approached it

Since `unknown` does not allow direct operations, I first needed to narrow the type using `typeof`.

I checked:

- If the value is a string
- If the value is a number
- Otherwise return `"Unknown"`

### What I learned

This problem helped me understand the difference between `any` and `unknown`.

With `any`, TypeScript basically stops checking types, which can easily create bugs. But `unknown` forces me to verify the type before using the value.

That makes the code much safer.

I think this was one of the most important concepts in the assignment because it showed how TypeScript prevents runtime mistakes before the code even runs.

---

# Problem 4: Generic Property Getter

This was the hardest problem for me at first because it introduced generics.

```typescript
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};
```

### How I approached it

I spent some time understanding what each generic means.

- `T` represents the object type
- `K` represents the key of that object
- `K extends keyof T` ensures the key actually exists inside the object
- `T[K]` means the returned value matches the property type

For example:

```typescript
const user = {
  name: "Saikot",
  age: 20,
};

getProperty(user, "name");
```

Here, TypeScript automatically knows the return type is `string`.

### What I learned

This problem changed how I think about reusable functions.

Before learning generics, I thought reusable code usually sacrifices type safety. But TypeScript generics solve that problem beautifully.

This function works with any object while still keeping strict typing.

It also improved my understanding of:

- `keyof`
- Generic constraints
- Dynamic property access

---

# Problem 5: Toggling Book Read Status

In this problem, I needed to toggle an optional `isRead` property.

```typescript
const toggleReadStatus = (book: {
  title: string;
  author: string;
  publishedYear: number;
  isRead?: boolean;
}) => {
  book.isRead = !book.isRead;

  return book;
};
```

### How I approached it

The important part here was the optional property:

```typescript
isRead?: boolean;
```

The `?` means the property may or may not exist.

Then I simply used:

```typescript
book.isRead = !book.isRead;
```

If the value is `true`, it becomes `false`, and vice versa.

### What I learned

This problem helped me understand optional properties better.

I also realized that directly mutating objects works, but in real applications, especially in React, returning a new object is usually a better practice.

Something like this would be cleaner:

```typescript
return {
  ...book,
  isRead: !book.isRead,
};
```

So this problem also taught me a bit about immutability.

---

# Problem 6: Creating a Student Class

For this problem, I needed to create a class with properties, a constructor, and a method.

```typescript
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
```

### How I approached it

I already knew JavaScript classes, so the main difference here was adding types.

The constructor initializes:

- name
- age
- grade

Then the `getDetails()` method returns a formatted string.

### What I learned

This problem helped me see how TypeScript improves object-oriented programming.

Adding types to class properties makes everything clearer and prevents accidental mistakes.

I also learned that TypeScript supports access modifiers like:

- `public`
- `private`
- `protected`

Even though I didn’t use them here, I now understand how they help control access to class properties.

---

# Problem 7: Finding Array Intersection

For the final problem, I needed to find common elements between two arrays.

```typescript
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((value) => arr2.includes(value));
};
```

### How I approached it

My approach was:

- Loop through the first array using `filter()`
- Check whether each value exists in the second array using `includes()`
- Keep only matching values

### What I learned

This problem reinforced my understanding of array methods.

It also reminded me how TypeScript keeps everything type-safe even when chaining methods together.

Since both arrays are typed as `number[]`, TypeScript ensures only numbers are compared.

---

# Final Thoughts

This assignment gave me a much clearer understanding of why developers use TypeScript in real projects.

Before this, I mostly saw TypeScript as “JavaScript with types.” But while solving these problems, I realized it actually helps with:

- Writing safer code
- Preventing bugs early
- Improving readability
- Making reusable functions more reliable
- Understanding data structures better

The most challenging topic for me was definitely generics, especially the `keyof` part. I had to read the syntax multiple times before it finally made sense. But after practicing it, I started appreciating how powerful TypeScript can be.

I also noticed that TypeScript encourages better coding habits because it forces me to think carefully about:

- What data a function accepts
- What it should return
- What edge cases might happen

Overall, this assignment was a really good learning experience for me. It helped me move beyond basic JavaScript and start thinking more like a TypeScript developer.
