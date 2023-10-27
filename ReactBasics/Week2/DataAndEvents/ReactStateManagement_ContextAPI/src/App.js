import MealsProvider from "./providers/MealsProvider";
import MealsList from "./components/MealsLst";
import Counter from "./components/Counter";

function App(){
    return (
        <div>
            <MealsProvider>
                <MealsList />
                <Counter />
            </MealsProvider>
        </div>
    );
}

export default App;