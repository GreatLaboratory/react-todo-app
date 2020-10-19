import styled, { StyledComponent, css } from 'styled-components';

export const TodoListItemLayout: StyledComponent<'div', any> = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    &:nth-child(even) {
        background: #f8f9fa;
    }
    & + & {
        border-top: 1px solid #dee2e6;
    }
`;

export const TodoListItemCheckBox: StyledComponent<'div', any> = styled.div`
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    svg {
        font-size: 1.5rem;
    }
    .text {
        margin-left: 0.5rem;
        flex: 1;
    }
    ${props => props.checked && css`
        svg {
                color: #22b8cf;
            }
        .text {
            color: #adb5bd;
            text-decoration: line-through;
        }
    `}
`;

export const TodoListItemRemove: StyledComponent<'div', any> = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
       color: #ff8787 
    }
`;
