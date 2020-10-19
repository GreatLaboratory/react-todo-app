import React, { useCallback } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';

import { TodoState } from '../modules/todo';
import { TodoListItemCheckBox, TodoListItemLayout, TodoListItemRemove } from './style/TodoListItem';

type TodoListItemProps = {
    todo: TodoState,
    onToggle: (id: number) => void,
    onRemove: (id: number) => void,
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, onToggle, onRemove }) => {
    const { id, text, checked } = todo;
    const handleToggle = useCallback(() => {
        onToggle(id);
    }, []);
    const handleRemove = useCallback(() => {
        onRemove(id);
    }, []);
    return (
        <TodoListItemLayout>
            <TodoListItemCheckBox checked={checked}>
                {checked ? <MdCheckBox onClick={handleToggle} /> : <MdCheckBoxOutlineBlank onClick={handleToggle} />}
                <div className='text'>{text}</div>
            </TodoListItemCheckBox>
            <TodoListItemRemove><MdRemoveCircleOutline onClick={handleRemove} /></TodoListItemRemove>
        </TodoListItemLayout>
    );
};

export default React.memo(TodoListItem);
