import { createStore, combineReducers } from 'redux';
import todoList from '../modules/todoList';

const rootReducer = combineReducers({
  todoList
});

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
