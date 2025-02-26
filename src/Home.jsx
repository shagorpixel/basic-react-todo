import { useState } from "react";
import Newtodo from "./Newtodo";
import Todo from "./Todo";

const Home = () => {
    const [todos,setTodos] = useState([]);
    console.log(todos)
    return (
        <div>
            <Newtodo setTodos = {setTodos}></Newtodo>
            {
                todos.map((todo,index)=><Todo key={index} todo={todo}></Todo>)
            }
        </div>
    );
};

export default Home;