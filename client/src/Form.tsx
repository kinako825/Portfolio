
import { useState } from 'react';

interface FormProps {
    addTodo: (text: string) => void;
}


const Form: React.FC<FormProps> = ({ addTodo }) => {
    const [text, setText] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() === '') return alert('文字を入力してください');
        addTodo(text);
        setText('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='タスクを入力...'
            />
            <button disabled={text.trim() === ''}>送信</button>
        </form>
    );
};

export default Form;