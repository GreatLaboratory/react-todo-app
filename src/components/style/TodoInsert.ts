import styled, { StyledComponent } from 'styled-components';

export const TodoInsertForm: StyledComponent<'form', any> = styled.form`
    display: flex;
    background: #495057;
`;
export const TodoInsertInput: StyledComponent<'input', any> = styled.input`
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    &::placeholder {
        color: #dee2e6
    }
    flex: 1;
`;
export const TodoInsertButton: StyledComponent<'button', any> = styled.button`
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
        background: #adb5bd;
    }
`;
