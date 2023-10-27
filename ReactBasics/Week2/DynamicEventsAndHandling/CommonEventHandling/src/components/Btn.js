// function Btn(){
//     const clickHandler = 
//         () => console.log('clicked');

//     return(
//         <button onClick={clickHandler}>
//             Click me
//         </button>
//     );
// }

// export default Btn;

function Btn(){
    const onMouseOverHandler = 
        () => console.log('Mouse Over');
        
    return(
        <button onMouseOver={onMouseOverHandler}>
            Click me
        </button>
    );
}

export default Btn;