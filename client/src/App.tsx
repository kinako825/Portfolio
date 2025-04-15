import { useState, useEffect } from 'react';
import { fetchTodos, addTodo, deleteTodo } from './api';
import Form from './Form';
import List from './List';
import styles from './styles/App.module.css';

export interface Todo {
    id: number;
    title: string;
}

const App = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetchTodos()
            .then((data) => {
                setTodos(data);
            })
            .catch((err) => console.error('Error fetching todos:', err));
    }, []);

    const handleAddTodo = (text: string) => {
        addTodo(text)
            .then((newTodo: { id: number; title: string }) => {
                setTodos((prev) => [...prev, newTodo]);
            })
            .catch((err) => console.error('Error adding todo:', err));
    };

    const handleDeleteTodo = (id: number) => {
        deleteTodo(id)
            .then(() => {
                setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
            })
            .catch((err) => console.error('Error deleting todo:', err));
    };

    return (
        <div className={styles.container}>
            <h1>Todo List</h1>
            <Form addTodo={handleAddTodo} />
            <List todos={todos} deleteTodo={handleDeleteTodo} />
        </div>
    );
};

export default App;
