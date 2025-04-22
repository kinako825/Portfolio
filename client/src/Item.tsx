import React, { useState } from 'react';
import styles from './styles/Item.module.css';
import Button from '@mui/material/Button';



interface ItemProps {
    id: number;
    title: string;
    deleteTodo: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({ id, title, deleteTodo }) => {
    const [isDone, setIsDone] = useState(false);
    return (
        <li className={styles.li}>
            <input
                type='checkbox'
                checked={isDone}
                onChange={() => setIsDone(!isDone)}
                className={styles.checkbox}
            />
            <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
                {title}
            </span>
            <Button
                variant="contained"
                className={styles.button}
                onClick={() => deleteTodo(id)}
                sx={{
                    backgroundColor: '#96add6',
                    '&:hover': {
                        backgroundColor: '#c64a47',
                    },
                    width: '60px',
                    marginLeft: '10px',
                }}
            >
                削除</Button>
        </li>
    );
};

export default Item;