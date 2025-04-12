
import React, { useState } from 'react';
import Buttun from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
        <form onSubmit={handleSubmit}>
            <TextField
                type="text"
                value={text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                placeholder='タスクを入力...'
            />
            <Buttun variant= "contained" color="primary" disabled={text.trim() === ''}>送信</Buttun>
        </form>
    );
};

export default Form;