import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

const TodoResults = () => {
  const doneTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.checked === true)
  );

  return <div className="todo-results">Done: {doneTodos.length}</div>;
};

export default TodoResults;
