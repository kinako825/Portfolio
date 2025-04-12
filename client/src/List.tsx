import Item from './Item';
import { Todo } from './App';

interface ListProps {
    todos: Todo[];
    deleteTodo: (id: number) => void;
}

const List: React.FC<ListProps> = ({ todos, deleteTodo }) => {
    // 配列をもとに新しい配列を生成: mapメソッド
    console.log(todos);
    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <Item
                        key={todo.id}
                        id={todo.id}
                        deleteTodo={deleteTodo}
                        title={todo.title}

                    />
                );
            })}
        </ul>
    );
};

export default List;