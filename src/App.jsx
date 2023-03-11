import TodoList from './components/TodoList';
import TodoResults from './components/TodoResults';
import { TodoForm } from 'components/TodoForm/TodoForm';
import './App.css';

const App = () => {
  return (
    <div className="root">
      <TodoList />
      <TodoResults />
      <TodoForm />
    </div>
  );
};

export default App;
