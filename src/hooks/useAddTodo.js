import { useState } from 'react';

const useAddTodo = () => {
  const [form, setForm] = useState('');

  const onChange = (event) => {
    setForm(event.target.value);
  };

  return [form, setForm, onChange];
};

export default useAddTodo;
