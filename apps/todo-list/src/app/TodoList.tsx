import React, {useState} from 'react'

const initialTodos = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Build a Todo App", completed: true },
  { id: 3, title: "Write Tests", completed: false },
  { id: 4, title: "Deploy App", completed: true },
];

function TodoList() {
    const [todos, setTodos] = useState(initialTodos);
    const [searchTerm, setSearchTerm] = useState("");


    const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const toggleTodoStatus = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    }

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={searchTerm}
        placeholder="Add a new todo"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <td>Toggle Status</td>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Completed" : "Uncompleted"}</td>
              <td>
                <input type="checkbox" checked={todo.completed} onChange={() => toggleTodoStatus(todo.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList
