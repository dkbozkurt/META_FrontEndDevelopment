function ModeToggler(){

    const darkModeOn = true;
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode= <h1>Light Mode is On</h1>

    function handleClick(){
        darkMode = !darkModeOn;
        
        darkMode ? console.log("Dark mode is on") :
        console.log("Light mode is on");
    }
    
    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>
                Toggle Mode
            </button>
        </div>
    )
}

export default ModeToggler;