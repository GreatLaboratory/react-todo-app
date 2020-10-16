import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TodoTemplate from '../components/TodoTemplate';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import { RootState } from '../modules';
import { TodosState, insertTodo, removeTodo, toggleTodo } from '../modules/todo';

const TodoContianer = () => {
    const todos: TodosState = useSelector((state: RootState) => state.todo);
    const dispatch = useDispatch();
    const onInsert = (text: string) => {
        dispatch(insertTodo(text));
    };
    const onToggle = (id: number) => {
        dispatch(toggleTodo(id));
    };
    const onRemove = (id: number) => {
        dispatch(removeTodo(id));
    };
    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
        </TodoTemplate>
    );
};

export default TodoContianer;
