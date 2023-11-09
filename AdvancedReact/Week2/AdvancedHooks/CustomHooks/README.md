# Custom Hooks

### How to name a custom hook

A custom hook needs to have a name that begins with use.

Because the hook in this example will be used to log values to the console, let’s name the hook <b>useConsoleLog</b>.

### Coding a custom hook

First, you’ll add it as a separate file, which you can name useConsoleLog.js, and add it to the root of the src folder, in the same place where the App.js component is located.

Here's the code of the useConsoleLog.js file:

```Javascript
import { useEffect } from "react";

function useConsoleLog(varName) {
  useEffect(() => {
    console.log(varName);
  }, [varName]);
}

export default useConsoleLog;
```

## Using a custom hook

Now that the custom hook has been coded, you can use it in any component in your app.

Since the app in the example only has a single component, named App, you can use it to update this component.

The useConsoleLog hook can be imported as follows:

```Javascript
import useConsoleLog from "./useConsoleLog";
```

And then, to use it, under the state-setting code, I'll just add the following line of code:

```Javascript
useConsoleLog(count);
```
Here's the completed code of the App.js file:

```Javascript
import { useState } from "react";
import useConsoleLog from "./useConsoleLog";

function App() {
  const [count, setCount] = useState(0);
  useConsoleLog(count);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Plus 1</button>
    </div>
  );
}

export default App;
```