import React, { useState } from 'react';
import styles from './styles/Item.module.css';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';



interface ItemProps {
    id: number;
    title: string;
    deleteTodo: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({ id, title, deleteTodo }) => {
    const [isDone, setIsDone] = useState(false);

    return (
        <Paper elevation={3} className={styles.paper}>
            <div className={styles.checkboxWrapper}>
                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => setIsDone(!isDone)}
                    className={styles.checkbox}
                />
            </div>
            <div className={styles.titleWrapper}>
                <span className={isDone ? styles.titleDone : styles.title}>
                    {title}
                </span>
            </div>
            <Button
                variant="contained"
                className={styles.button}
                onClick={() => deleteTodo(id)}
            >
                削除</Button>

        </Paper >
    );
};

export default Item;