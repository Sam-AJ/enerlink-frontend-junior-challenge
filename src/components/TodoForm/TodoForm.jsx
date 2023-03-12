import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../../store/slice/thunks';
import './styles.css';

const TodoForm = () => {
    const [value, setValue] = useState();

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodoAsync({
            label: value,
        }));
        setValue('');
    };

    return (
        <div className="todo-form">
            <form onSubmit={onSubmit} >
                <div className="todo-form-content">
                    <input
                        className="todo-input"
                        type="text"
                        placeholder="Enter new to do"
                        value={value}
                        required
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <button type="submit" className="todo-list-item-add">
                        add to do
                    </button>
                </div>
            </form>
        </div>
    )
};

export default TodoForm;