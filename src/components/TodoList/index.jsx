import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosAsync } from '../../store/slice/thunks';

import TodoListItem from '../TodoListItem';

import './styles.css';

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div>
        {
          todos.length
            ? todos.map((todo) => (
              <TodoListItem key={todo.id} id={todo.id} label={todo.label} checked={todo.checked} />
            ))
            :
            <div className="no-todos">
              Looks like you&apos;re absolutely free today!
            </div>
        }
      </div>
    </div>
  );
};

export default TodoList;