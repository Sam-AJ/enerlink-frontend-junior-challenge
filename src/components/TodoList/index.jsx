import TodoListItem from 'components/TodoListItem';
import { useSelector } from 'react-redux';
import './styles.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  const handleDelete = (todoId) => {
    // Fix an ability to delete task
  };

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div>
        {todos.map((todo) => (
          <TodoListItem label={todo.title}/>
        ))}
      </div>
      <div className="no-todos">
        Looks like you&apos;re absolutely free today!
      </div>
    </div>
  );
};

export default TodoList;