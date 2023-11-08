# What is the useEffect Hook?

The code you place inside the useEffect hook always runs after your component mounts or, in other words, after React has updated the DOM.

In addition, depending on your configuration via the dependencies array, your effects can also run when certain state variables or props change. 

By default, if no second argument is provided to the useEffect function, the effect will run after every render.

```Javascript
useEffect(() => { 
   document.title = 'Little Lemon';
 }); 
```
However, that may cause performance issues, especially if your side effects are computationally intensive. A way to instruct React to skip applying an effect is passing an array as a second parameter to useEffect.

<hr>

In the below example, the integer variable version is passed as the second parameter. That means that the effect will only be re-run if the version number changes between renders.

```Javascript
useEffect(() => { 
  document.title = `Little Lemon, v${version}`;
}, [version]);
```

### Use multiple Effects to Separate Concerns

```Javascript
function MenuPage(props) { 
  const [data, setData] = useState([]); 

  useEffect(() => { 
    document.title = 'Little Lemon'; 
  }, []); 

  useEffect(() => { 
    fetch(`https://littlelemon/menu/${id}`) 
      .then(response => response.json()) 
      .then(json => setData(json)); 
  }, [props.id]); 

  // ... 
} 
```
Multiple hooks allow you to split the code based on what it is doing, improving code readability and modularity.

## Effects with Cleanup

In line with the previous point of splitting the code based on what it is doing, the useEffect hook has been designed to keep the code for adding and removing a subscription together, since it’s tightly related. 

```Javascript
function LittleLemonChat(props) { 
  const [status, chatStatus] = useState('offline'); 

  useEffect(() => { 
    LemonChat.subscribeToMessages(props.chatId, () => setStatus('online')) 

    return () => { 
      setStatus('offline'); 
      LemonChat.unsubscribeFromMessages(props.chatId); 
    }; 
  }, []); 

  // ... 
} 
```