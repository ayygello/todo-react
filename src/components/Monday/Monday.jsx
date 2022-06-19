import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useAddTodo from '../../hooks/useAddTodo';
import { addTodo, removeTodo, toggleTodo } from '../../redux/reducers/monday';

const Monday = () => {
  const items = useSelector((state) => state.monday);
  const dispatch = useDispatch();
  const [form, setForm, handleOnChange] = useAddTodo();

  const handleOnAdd = (todo) => {
    dispatch(addTodo(todo));
    setForm('');
  };

  const handleOnDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleOnToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleOnAdd(form);
        }}
      >
        <input
          className='add-form'
          type='text'
          placeholder='Add a task...'
          maxLength={45}
          required
          value={form}
          onChange={handleOnChange}
        />
        <button type='sumbit' className='btn-add'>
          ✚
        </button>
      </form>
      <ul>
        {items.map((el) => (
          <li key={el.id}>
            <input
              type='checkbox'
              checked={el.completed ? true : false}
              onChange={() => handleOnToggle(el.id)}
            />
            <div className='todo'>{el?.name}</div>
            <button className='btn-del' onClick={() => handleOnDelete(el.id)}>
              🗑
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Monday;
