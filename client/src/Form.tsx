
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import styles from './styles/Form.module.css';

interface FormProps {
    addTodo: (text: string) => void;
}


const Form: React.FC<FormProps> = ({ addTodo }) => {
    const [text, setText] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim() === '') return alert('文字を入力してください');
        addTodo(text);
        setText('');
    };
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <TextField
                type="text"
                value={text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                placeholder='タスクを入力...'
                variant="outlined"
                size="medium"
                className={styles.input}
                sx={{
                    marginRight: '10px',
                    backgroundColor: '#ffffff',
                }}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                size="medium"
                disabled={text.trim() === ''}
                className={styles.button}
                sx={{
                    backgroundColor: '#67be95',
                }}
            >
                送信
            </Button>
        </form>
    );
};

export default Form;