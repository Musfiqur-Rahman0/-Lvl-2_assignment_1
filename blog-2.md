# How Generics Help Build Reusable and Type-Safe Code in TypeScript

When I first started learning TypeScript, generics seemed confusing because of the `<T>` syntax. But after practicing with a few examples, I realized generics are one of the most useful features in TypeScript.

Generics allow us to write reusable code without losing type safety.

---

# The Problem Without Generics

Without generics, developers often use `any`.

```typescript
function reverseArray(arr: any[]): any[] {
  return arr.reverse();
}
```

This works, but TypeScript loses all information about the array type. The returned value becomes `any[]`, which removes type safety and autocomplete support.

---

# Using Generics

Generics solve this problem by using type placeholders.

```typescript
function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}
```

Here, `T` represents a type.

If we pass a number array, TypeScript automatically understands:

```typescript
T = number;
```

And if we pass strings:

```typescript
T = string;
```

This means the same function works for multiple types while keeping everything strictly typed.

---

# Generic Classes

Generics are also useful in classes.

```typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}
```

Now we can create different stacks:

```typescript
const numberStack = new Stack<number>();
const stringStack = new Stack<string>();
```

TypeScript ensures each stack only accepts the correct data type.

---

# Generic Constraints

One concept I found very interesting was generic constraints.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

This ensures the property key must exist inside the object.

```typescript
const user = {
  name: "Saikot",
  age: 20,
};

getProperty(user, "name");
```

If I try to access a property that doesn’t exist, TypeScript immediately shows an error.

---

# What I Learned

After practicing with generics, I understood that they help:

- write reusable code
- maintain strict typing
- reduce code duplication
- improve autocomplete and developer experience
- catch errors early

At first, generics looked difficult, but once I started using them in real examples, the logic became much clearer.

Overall, generics made me appreciate how powerful TypeScript can be for building scalable and maintainable applications.
