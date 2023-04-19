---
title: Understanding React
excerpt: React is one of the most popular libraries for front-end web development, and getting started is super easy once!
image: understanding-reactjs.jpeg
isFeatured: true
date: "2023-04-16"
---

React is a **JavaScript library** that helps you to build UIs out of small building blocks called components.

React's functional components are JavaScript functions, meaning you can write all your vanilla JavaScript code inside of these components.

```js
export default function HomePage() {
  const message = "JavaScript inside a React functional component";
}
```

It doesn't stop there! React let's you write markup close to your functions through the JSX syntax, making creating, maintaining, and deleting React components super easy!

```jsx
export default function HomePage() {
  const message = "JavaScript inside a React functional component";

  return (
    <section>
      <h1>{message}</h1>
    </section>
  );
}
```

Learn more about it [here](https://react.dev/).
