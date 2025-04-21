// api.ts
const API_URL = process.env.REACT_APP_API_URL + '/todos';

export const fetchTodos = async () => {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) {
            throw new Error('Failed to fetch todos');
        }
        return await res.json();
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};

export const addTodo = async (title: string) => {
    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title }),
        });
        if (!res.ok) {
            throw new Error('Failed to add todo');
        }
        return await res.json();
    } catch (error) {
        console.error('Error adding todo:', error);
        throw error;
    }
};

export const deleteTodo = async (id: number) => {
    try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!res.ok) {
            throw new Error('Failed to delete todo');
        }
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
};
