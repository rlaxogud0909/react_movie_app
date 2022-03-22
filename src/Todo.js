import { useState } from "react";

function App() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const onChange = (event) => {
        setTodo(event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (todo === "") {
            return;
        }

        setTodos((currentArray) => [todo, ...currentArray]);
        setTodo("");
    };
    // console.log(todos);

    return (
        <div>
            <h1>My To Dos</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={todo}
                    onChange={onChange}
                    placeholder="Write your to do..."
                />
                <button>Add To Do</button>
            </form>
            <hr />
            {todos.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
        </div>
    );
}

export default App;
