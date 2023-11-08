import React from "react";
import GoalForm from "./GoalForm";
import ListOfGoals from "./ListOfGoals";

function App()
{
    const [allGoals,updateAllGoals] = React.useState([]);

    function addGoal(goal) 
    {
        updateAllGoals([...allGoals,goal]);
    }

    return (
        <div className="App">
            <GoalForm onAdd={addGoal} />
            <ListOfGoals allGoals={allGoals} />
        </div>
    );
}

export default App;