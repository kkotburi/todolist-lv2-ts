import shortid from 'shortid';
import { Todo } from '../../components/Form';

const ADD_TODO = 'todoList/ADD_TODO';
const DELETE_TODO = 'todoList/DELETE_TODO';
const SWITCH_TODO = 'todoList/SWITCH_TODO';

export const addTodo = (payload: Todo[]) => ({
  type: ADD_TODO,
  payload
});
export const deleteTodo = (payload: string) => ({
  type: DELETE_TODO,
  payload
});
export const switchTodo = (payload: string) => ({
  type: SWITCH_TODO,
  payload
});

type TodoListAction = ReturnType<typeof addTodo> | ReturnType<typeof deleteTodo> | ReturnType<typeof switchTodo>;

const initialState = [
  {
    id: shortid.generate(),
    title: '제주도',
    contents: '일주일 살기',
    isDone: false
  },
  {
    id: shortid.generate(),
    title: '서울',
    contents: '모각지 참여',
    isDone: true
  }
];

const todoList = (state = initialState, action: TodoListAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    case 'SWITCH_TODO':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default todoList;
