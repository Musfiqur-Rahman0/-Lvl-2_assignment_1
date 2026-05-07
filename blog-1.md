# Why `unknown` is Safer Than `any` in TypeScript

When I first started using TypeScript, I used `any` a lot because it felt easy and flexible. But later I realized that `any` removes TypeScript’s type checking, which can easily create runtime bugs.

Example:

```typescript
const data: any = "Hello";

console.log(data.name); // No TypeScript error
```

Even though the code is wrong, TypeScript allows it because `any` disables type safety.

That’s why `any` is considered a type safety hole.

---

# Using `unknown`

`unknown` is a safer alternative because TypeScript forces us to check the type before using the value.

```typescript
const data: unknown = "Hello";

// Error without type checking
// console.log(data.toUpperCase());
```

Before using the value, we must narrow the type.

```typescript
if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

Now TypeScript understands that `data` is a string.

---

# What I Learned

After learning about `unknown`, I understood that it is much safer than `any`.

- `any` disables type checking
- `unknown` keeps type safety
- Type narrowing helps prevent runtime errors
- TypeScript becomes more reliable and predictable

Now whenever I work with unknown or dynamic data, I try to use `unknown` instead of `any` whenever possible.
