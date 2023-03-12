import { createSlice } from '@reduxjs/toolkit';
import { addTodoAsync, deleteTodoAsync, getTodosAsync, toggleCheckAsync } from './thunks';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                label: action.payload.label,
                checked: false
            }
            state.push(newTodo);
        },
        toggleCheck: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].checked = action.payload.checked;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTodosAsync.fulfilled, (state, action) => {
            return action.payload.todos
        })
        builder.addCase(addTodoAsync.fulfilled, (state, action) => {
            state.push(action.payload.todo);
        })
        builder.addCase(toggleCheckAsync.fulfilled, (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].checked = action.payload.checked;
        })
        builder.addCase(deleteTodoAsync.fulfilled, (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        })
        builder.addCase(deleteTodoAsync.rejected, (state, action) => {
            state.error = action.payload;
        })
    }
});

export const { addTodo, deleteTodo, toggleCheck } = todoSlice.actions;