import { useState } from "react";
import { v4 as  uuidv4} from "uuid";

const Newtodo = ({setTodos}) => {

    const [todo,setTodo] = useState({title:'',description:''});
    const hanleChange = (e)=>{
        const name = e.target.name
        setTodo(oldTodo=>{
            return {...oldTodo, [name]: e.target.value}
        })
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        setTodos(oldTodos=>[...oldTodos,{id: uuidv4(),...todo}])
    }
    return (
        <div>
          <form onSubmit={handleSubmit} className=" max-w-sm mx-auto bg-gray-100 p-6 rounded-md ">
                <input onChange={hanleChange}  className=" w-full py-2 px-3 rounded bg-gray-200 mb-2" type="text" name="title" placeholder="Task Name"/>
                <textarea onChange={hanleChange} className=" w-full py-2 px-3 rounded bg-gray-200" name="description" id="" placeholder="Description" ></textarea>
                <button className=" w-full py-2 px-3 rounded bg-green-400 text-white" >Add Todo</button>
            </form>  
        </div>
    );
};

export default Newtodo;