import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';

import { TodoInsertButton, TodoInsertForm, TodoInsertInput } from './style/TodoInsert';

type TodoInsertProps = {
    onInsert: (text: string) => void
}

const TodoInsert: React.FC<TodoInsertProps> = ({ onInsert }) => {
    const [input, setInput] = useState<string>('');
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }, []);
    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onInsert(input);
        setInput('');
    }, [onInsert, input]);
    return (
        <TodoInsertForm onSubmit={onSubmit}>
            <TodoInsertInput value={input} onChange={onChange} placeholder='할 일을 입력하세요.' />
            <TodoInsertButton type='submit'><MdAdd /></TodoInsertButton>
        </TodoInsertForm>
    );
};

export default TodoInsert;
