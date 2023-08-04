import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../redux/config/configStore';
import { TodoListState } from '../redux/modules/todoList';

const Detail = () => {
  const { id } = useParams<string>();
  const navigate = useNavigate();

  const todoList = useSelector((state: RootState): TodoListState => {
    return state.todoList;
  });

  const todo = todoList.find((todo) => todo.id === id);

  return (
    <div>
      <button onClick={() => navigate('/')}>previous</button>
      <div>{todo?.id}</div>
      <div>{todo?.title}</div>
      <div>{todo?.contents}</div>
      <div>{todo?.isDone.toString()}</div>
    </div>
  );
};

export default Detail;
