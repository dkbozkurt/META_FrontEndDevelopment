<b>The correct way to update the state object in React when using useState</b>

The suggested approach for updating the state object in React when using useState is to copy the state object and then update the copy.
This usually involves using the spread operator (...).

```Javascript
import {useState} from "react";

export default function App(){
    const [greeting,setGreeting] = useState({greet:"Hello, World"});
    console.log(greeting, setGreeting);

    function updateGreeting(){
    // We are using ... because otherwise it is costly to update the entire object just for the sake of updating only a small part of it.
        const newGreeting = {...greeting};
        newGreeting.greet = "Hello, Word-wide Web";

    // Incorrect way of setting    
    // greeting = {greet: "Hello, World-Wide Web"}; 
    // greeting.greet = "Hello, World-Wide Web; 

        setGreeting(newGreeting);
    };

    return {
        <div> 
        <h1>{greeting.greet}</h1>
        <button onClick={updateGreeting}> 
            Update greeting!
        </button>
        </div>
    }
}
```

<b> Updating the state object using arrow functions </b>

Now, let’s use a more complex object to update state.
The intention of this update is to demonstrate what to do when only a specific property of the state object is changing, while keeping the remaining properties unchanged:

```Javascript
import {useState} from "react";

export default function App(){
    const [greeting, setGreeting] = useState(
        {
            greet: "Hello",
            place: "World"
        }
    );

    console.log(greeting, setGreeting);

    function updateGreeting(){
        setGreeting(prevState =>
        {
            return {...prevState, place:"World-Wide Web"}
        });
    };

    return (
        <div>
            <h1> {greeting.greet}, {greeting.place} </h1>
            <button onChange ={updateGreeting}> 
                Update greeting 
            </button>
        </div>
    );
}
```
The reason this works is because it uses the previous state, which is named prevState, and this is the previous value of the greeting variable. In other words, it makes a copy of the prevState object, and updates only the place property on the copied object. It then returns a brand-new object: 

```Javascript
return {...prevState, place: "World-Wide Web"} 
```

Everything is wrapped in curly braces so that this new object is built correctly, and it is returned from the call to setGreeting.

<b>Conclusion</b>

You have learned what happens when changing the string data type to an object, with examples of holding state in an object and updating it based on user-generated events. You also learned about correct and incorrect ways to update the state object in React when using useState, and about updating the state object using arrow functions.
