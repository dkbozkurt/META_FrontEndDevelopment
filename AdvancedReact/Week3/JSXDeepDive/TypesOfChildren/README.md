# Type of Children

In JSX expressions, the content between an opening and closing tag is passed as a unique prop called children. There are several ways to pass children, such as rendering string literals or using JSX elements and JavaScript expressions. It is also essential to understand the types of JavaScript values that are ignored as children and don’t render anything. 

### String literals

They can be put between the opening and closing tags, and the children prop will be that string.

```Javascript
<MyComponent>Little Lemon</MyComponent>
```
In the above example, the children prop in MyComponent will be simply the string “Little Lemon”. 

<hr>

### JSX Elements

You can provide JSX elements as children to display nested components:
```Javascript
<Alert>
  <Title />
  <Body />
</Alert>
```

JSX also enables mixing and matching different types of children, like a combination of string literals and JSX elements:

```Javascript
<Alert>
  <div>Are you sure?</div>
  <Body />
</Alert>
```

React Fragments either using the explicit component imported from React or empty tags, which is a shorter syntax for a fragment. The two code examples below are equivalent.

```Javascript
return (
  <React.Fragment>
    <li>Pizza margarita</li>
    <li>Pizza diavola</li>
  </React.Fragment>
);

return (
  <>
    <li>Pizza margarita</li>
    <li>Pizza diavola</li>
  </>
);
```

### Javascript Expressions

You can pass any JavaScript expression as children by enclosing it within curly braces, {}. The below expressions are identical:

```Javascript
<MyComponent>Little Lemon</MyComponent>
<MyComponent>{'Little Lemon'}</MyComponent>
```

### Booleans, Null and Undefined are ignored

false, null, undefined, and true are all valid children. They simply don’t render anything. The below expressions will all render the same thing:

```Javascript
<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>
```

owever, boolean values like true and false can be useful to conditionally render React elements, like rendering a Modal component only if the variable showModal is true

```Javascript
<div>
  {showModal && <Modal />}
</div>
```

However, keep in mind that React still renders some "false" values, like the 0 number. For example, the below code will not behave as you may expect because 0 will be printed when props.desserts is an empty array:

```Javascript
<div>
  {props.desserts.length &&
    <DessertList desserts={props.desserts} />
  }
</div>
```
To fix this, you need to make sure the expression before && is always boolean:
```Javascript
<div>
  {props.desserts.length > 0 &&
    <DessertList desserts={props.desserts} />
  }
</div>

<div>
  {!!props.desserts.length &&
    <DessertList desserts={props.desserts} />
  }
</div>
```