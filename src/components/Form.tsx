import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const Form = () => {
  const [title, setTitle] = useState<string>('');
  const [contents, setContents] = useState<string>('');

  const dispatch = useDispatch();

  const submitTodo = (e: React.FormEvent<HTMLFormElement>) => {
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
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  return (
    <form onSubmit={submitTodo}>
      <label>title</label>
      <input type="text" name="title" value={title} onChange={onChangeTitle} />
      <label>contents</label>
      <input type="text" name="title" value={contents} onChange={onChangeContents} />
      <button type="submit">add</button>
    </form>
  );
};

export default Form;
