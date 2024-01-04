
/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/export function Todos({ todos }) {
    return (
        <div>
            {todos.map(function (todo, index) {
                // Added key prop with a unique identifier (index in this case)
                return (
                    <div key={index}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed === true ? "Completed" : "Mark as Complete"}</button>
                    </div>
                );
            })}
        </div>
    );
}

//Key Prop: Added a key prop to the outer <div> when mapping over the todos.
//This helps React to efficiently update and re-render the component when the
//todos array changes.