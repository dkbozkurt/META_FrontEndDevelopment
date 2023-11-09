# When to choose useReducer vs useState

The <b>useState</b> hook is best used on less complex data.
While it's possible to use any kind of a data structure when working with useState, it's better to use it with primitive data types, such as strings, numbers, or booleans.

The <b>useReducer</b> hook is best used on more complex data, specifically, arrays or objects.

One negative characteristic of useState is that it often gets hard to maintain as the state gets more complex.

On the flip side, a negative characteristic of useReducer is that it requires more prep work to begin with. There's more setup involved. However, once this setup is completed, it gets easier to extend the code based on new requirements.