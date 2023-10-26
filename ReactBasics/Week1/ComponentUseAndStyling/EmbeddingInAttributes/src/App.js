// Embed a JSX expression in an attribute

import avatar from './avatar.png';;

function Logo(props)
{
    const userPic = <img src ={avatar} />;
    return userPic;
}

function App(){
    return (
        <div>
            <h1>Hello World!</h1>
            <Logo />
        </div>
    );
}

export default App;