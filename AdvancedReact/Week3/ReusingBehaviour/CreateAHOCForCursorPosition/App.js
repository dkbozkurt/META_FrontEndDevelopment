import "./App.css";
import React from 'react';

const withMousePosition = (WrappedComponent) =>
{
    return(props) => {
        const [mousePosition, setMousePosition] = React.useState({
            x:0,
            y:0,
        })

        React.useEffect(() => {
            const handleMousePosition = (e) => {
                setMousePosition({
                    x:e.clientX,
                    y:e.clientY,
                })
            }

            window.addEventListener("mousemove", handleMousePositionChange);

            return() => {
                window.removeEventListener("mousemove", handleMousePositionChange);
            }

        },[]);

        return <WrappedComponent {...props} mousePosition= {mousePosition} />
    }
}

const PanelMouseLogger = ({mousePosition}) => {
    if(!mousePosition) return null;

    return (
        <div className= "BasicTracker">
            <p>Mouse Position:</p>
            <div className = "Row">
                <span>x: {mousePosition.x}</span>
                <span>y: {mousePosition.y}</span>
            </div>
        </div>
    );
};

const PointMouseLogger = ({mousePosition}) => {
    if(!mousePosition) return null;

    return (
        <p>
            ({mousePosition.x},{mousePosition.y})
        </p>
    );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function App()
{
    return (
        <div className= "App">
            <header className="Header">Little Lemon Restaurant</header>
            <PanelMouseLogger/>
            <PointMouseLogger/>
        </div>
    )
}

export default App;
