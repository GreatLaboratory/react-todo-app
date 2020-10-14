// 1. 액션타입 정의
const TODO_INSERT = 'todo/TODO_INSERT' as const;
const TODO_TOGGLE = 'todo/TODO_TOGGLE' as const;
const TODO_REMOVE = 'todo/TODO_REMOVE' as const;

let nextId: number = 4;

// 2. 액션 생성 함수
export const insertTodo = (text: string) => ({
    type: TODO_INSERT,
    payload: text
});

export const toggleTodo = (id: number) => ({
    type: TODO_TOGGLE,
    payload: id
});

export const removeTodo = (id: number) => ({
    type: TODO_REMOVE,
    payload: id
});

// 3. state, action의 타입 정의
export type TodoState = {
    id: number,
    text: string,
    checked: boolean,
}

export type TodosState =TodoState[];

type TodoAction = 
    | ReturnType<typeof insertTodo>
    | ReturnType<typeof toggleTodo>
    | ReturnType<typeof removeTodo>

// 4. 초기 state 선언
const initialState: TodosState = [
    {
        id: 1,
        text: 'react 공부',
        checked: true,
    },
    {
        id: 2,
        text: 'docker 공부',
        checked: true,
    },
    {
        id: 3,
        text: '학교수업 공부',
        checked: false,
    },
];

// 5. 리듀서 함수 정의
const reducer = (state: TodosState = initialState, action: TodoAction) => {
    switch (action.type) {
    case TODO_INSERT:
        return state.concat({ id: nextId++, 
            text: action.payload, 
            checked: false,
        });
    case TODO_TOGGLE: 
        return state.map((todo: TodoState) => todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo);
    case TODO_REMOVE:
        return state.filter((todo: TodoState) => todo.id !== action.payload);
    default:
        return state;
    }
};

export default reducer;
