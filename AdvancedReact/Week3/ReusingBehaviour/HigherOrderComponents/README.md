# Higher-order components

Never mutating a component inside a HOC, passing unrelated props to your wrapped component, and maximizing composability by leveraging the Component => Component signature.

### Don`t mutate the original component

Remember that React promotes immutability in all scenarios. So instead, use composition and turn the HOC into a pure function that does not alter the argument it receives, always returning a new component.

```Javascript
const HOC = (WrappedComponent) => {
  // Don't do this and mutate the original component
  WrappedComponent = () => {
    
  }; 
 …
}
```

### Pass unrelated props through to the Wrapped Component

HOC adds features to a component. In other words, it enhances it. That's why they shouldn't drastically alter their original contract. Instead, the component returned from a HOC is expected to have a similar interface to the wrapped component.

HOCs should spread and pass through all the props that are unrelated to their specific concern, helping ensure that HOCs are as flexible and reusable as possible, as demonstrated in the example below:

```Javascript
const withMousePosition = (WrappedComponent) => {
  const injectedProp = {mousePosition: {x: 10, y: 10}};

  return (originalProps) => {
    return <WrappedComponent injectedProp={injectedProp} {...originalProps} />;
  };
};
```

### Maximize composability

Sometimes, HOCs can accept additional arguments that act as extra configuration determining the type of enhancement the component receives.

```Javascript
const EnhancedComponent = HOC(WrappedComponent,config)
```

The most common signature for HOCs uses a functional programming pattern called "currying" to maximize function composition. This signature is used extensively in React libraries, such as 
React Redux
, which is a popular library for managing state in React applications. 

```Javascript
const EnhancedComponent = connect(selector, actions)(WrappedComponent);
```

This syntax may seem strange initially, but if you break down what's happening separately, it would be easier to understand.

```Javascript
const HOC = connect(selector, actions);
const EnhancedComponent = HOC(WrappedComponent);
```

<b>connect</b> is a function that returns a higher-order component, presenting a valuable property for composing severals HOCs together.

Single-argument HOCs like the ones you have explored so far, or the one returned by the connect function has the signature Component => Component. It turns out that functions whose output type is the same as its input type are really easy to compose together.

```Javascript
const enhance = compose(
  // These are both single-argument HOCs
  withMousePosition,
  withURLLocation,
  connect(selector)
);

// Enhance is a HOC
const EnhancedComponent = enhance(WrappedComponent);
```

<b> compose(f, g, h) is the same as (...args) => f(g(h(...args))) </b>

### Caveats

1. Don't use HOCs inside other components: always create your enhanced components outside any component scope. Otherwise, if you do so inside the body of other components and a re-render occurs, the enhanced component will be different. That forces React to remount it instead of just updating it. As a result, the component and its children would lose their previous state. 

```Javascript
const Component = (props) => {
  // This is wrong. Never do this
  const EnhancedComponent = HOC(WrappedComponent);
  return <EnhancedComponent />;
};

// This is the correct way
const EnhancedComponent = HOC(WrappedComponent);
const Component = (props) => {
  return <EnhancedComponent />;
};
```

2. Refs aren’t passed through: since React refs are not props, they are handled specially by React. If you add a ref to an element whose component is the result of a HOC, the ref refers to an instance of the outermost container component, not the wrapped component.