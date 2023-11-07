import { func } from "prop-types";
import {useState} from "react";

export default function App(){
    const [restaurantName,setRestaurantName] = useState("Lemon");
    
    function updateRestaurantName(){
        setRestaurantName("Little Lemon");
    };

    return (
        <div className = "App">
            <h1>{restaurantName}</h1>
            <button onClick={updateRestaurantName}>
                Update restaurant name
            </button>
        </div>
    );
};