import React from 'react';
import { TodosState } from '../modules/todo';
import TodoListItem from './TodoListItem';
import { TodoState } from '../modules/todo';
import { TodoListLayout } from './style/TodoList';

type TodoListProps = {
    todos: TodosState,
    onToggle: (id: number) => void,
    onRemove: (id: number) => void,
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
    return (
        <TodoListLayout>
            {todos.map((todo: TodoState) => <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove}></TodoListItem>)}
        </TodoListLayout>
    );
};

export default React.memo(TodoList);
