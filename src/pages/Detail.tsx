import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// import { Todo } from '../components/Form';

export interface Todo {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

interface RootState {
  todoList: Todo[];
}

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const todoList = useSelector((state: RootState) => {
    return state.todoList;
  });

  const todo = todoList.find((todo) => todo.id === id);

  return (
    <div>
      <button onClick={() => navigate('/')}>previous</button>
      <div>{todo.id}</div>
      <div>{todo.title}</div>
      <div>{todo.contents}</div>
      <div>{todo.isDone.toString()}</div>
    </div>
  );
};

export default Detail;
