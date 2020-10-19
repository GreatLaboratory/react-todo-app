import React from 'react';

import { AppTitle, Content, TodoTemplateLayout } from './style/TodoTemplate';

const TodoTemplate: React.FC = ({ children }) => {
    return (
        <TodoTemplateLayout>
            <AppTitle>일정관리 by GreatLaboratory</AppTitle>
            <Content>{children}</Content>
        </TodoTemplateLayout>
    );
};

export default TodoTemplate;
