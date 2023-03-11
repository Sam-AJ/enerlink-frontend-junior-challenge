import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/slice/todoSlice';
import './styles.css';

export const TodoForm = () => {
    const [value, setValue] = useState();

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo({
            title: value,
        }));
    };

    return (
        <div>
            <form onSubmit={onSubmit} className="todo-form">
                <div className="todo-form-content">
                    <input
                        className="todo-input"
                        type="text"
                        placeholder="Enter new to do"
                        value={value}
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