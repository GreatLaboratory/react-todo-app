import styled, { StyledComponent } from 'styled-components';

export const TodoTemplateLayout: StyledComponent<'div', any> = styled.div`
    width: 512px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;
    border-radius: 4px;
    overflow: hidden
`;

export const AppTitle: StyledComponent<'div', any> = styled.div`
    background: #22b8cf;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content: StyledComponent<'div', any> = styled.div`
    background: white;
`;
