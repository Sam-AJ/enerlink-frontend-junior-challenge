import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoAsync, toggleCheckAsync } from '../../store/slice/thunks';
import './styles.css';

const TodoListItem = ({ id, checked, label }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleCheckAsync({ id, checked: !checked }));
  };

  const handleDelete = () => {
    dispatch(deleteTodoAsync({ id }))
  };

  return (
    <div className="todo-list-item">
      <div
        tabIndex="0"
        role="checkbox"
        aria-checked
        className="todo-list-item-content"
      >
        <input
          tabIndex="-1"
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
        />
        <span className={checked ? "todo-list-item-checked" : ""}>{label}</span>
      </div>
      <button type="button" className="todo-list-item-delete" onClick={handleDelete}>
        x
      </button>
    </div>
  )
};

export default TodoListItem;
