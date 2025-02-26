const Todo = ({todo}) => {
    return (
        <div className=" max-w-sm mx-auto bg-gray-100 p-6 rounded-md my-2">
            <h2>Name:{todo.title}</h2>
            <h2>Description:{todo.description}</h2>
        </div>
    );
};

export default Todo;