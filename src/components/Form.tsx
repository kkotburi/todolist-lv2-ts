import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

export interface Todo {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

const Form = () => {
  const [title, setTitle] = useState<string>('');
  const [contents, setContents] = useState<string>('');

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (!title || !contents) {
          alert('A required value is missing, please check.');
          return false;
        }

        dispatch({
          type: 'ADD_TODO',
          payload: {
            id: shortid.generate(),
            title,
            contents,
            isDone: false
          }
        });

        setTitle('');
        setContents('');
      }}
    >
      <label>title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label>contents</label>
      <input
        type="text"
        name="title"
        value={contents}
        onChange={(e) => {
          setContents(e.target.value);
        }}
      />
      <button type="submit">add</button>
    </form>
  );
};

export default Form;
