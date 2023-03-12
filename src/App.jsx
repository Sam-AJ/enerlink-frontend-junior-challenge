import TodoList from './components/TodoList';
import TodoResults from './components/TodoResults';
import TodoForm from './components/TodoForm/TodoForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  return (
    <div className="root">
      <TodoList />
      <TodoResults />
      <TodoForm/>
      <ToastContainer />
    </div>
  );
};

export default App;
