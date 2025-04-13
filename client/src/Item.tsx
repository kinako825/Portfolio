import React, { useState } from 'react';
// import { Todo } from './App';
import './styles/Item.module.css';

interface ItemProps {
    id: number;
    title: string;
    deleteTodo: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({ id, title, deleteTodo }) => {
    const [isDone, setIsDone] = useState(false);
    return (
        <li>
            <input
                type='checkbox'
                checked={isDone}
                onChange={() => setIsDone(!isDone)}
            />
            <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
                {title}
            </span>
            <button onClick={() => deleteTodo(id)}>削除</button>
        </li>
    );
};

export default Item;