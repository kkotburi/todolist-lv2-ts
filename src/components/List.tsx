import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/config/configStore';
import { TodoListState } from '../redux/modules/todoList';

const List = () => {
  const todoList = useSelector((state: RootState): TodoListState => {
    return state.todoList;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todo List</h2>
      {todoList
        .filter((todo) => !todo.isDone)
        .map((todo) => {
          return (
            <div key={todo.id}>
              <Link to={`/${todo.id}`}>detail</Link>
              <div>{todo.title}</div>
              <div>{todo.contents}</div>
              <button
                onClick={() => {
                  dispatch({
                    type: 'SWITCH_TODO',
                    payload: todo.id
                  });
                }}
              >
                done
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: 'DELETE_TODO',
                    payload: todo.id
                  });
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      <h2>Done List</h2>
      {todoList
        .filter((todo) => todo.isDone)
        .map((todo) => {
          return (
            <div key={todo.id}>
              <Link to={`/${todo.id}`}>detail</Link>
              <div>{todo.title}</div>
              <div>{todo.contents}</div>
              <button
                onClick={() => {
                  dispatch({
                    type: 'SWITCH_TODO',
                    payload: todo.id
                  });
                }}
              >
                cancle
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: 'DELETE_TODO',
                    payload: todo.id
                  });
                }}
              >
                delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default List;
