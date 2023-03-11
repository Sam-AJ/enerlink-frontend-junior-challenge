import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, title: 'Fix an ability to display all tasks', done: false },
        { id: 2, title: 'Fix a layout, checkboxes should be listed in a column', done: false },
        { id: 3, title: 'Fix an ability to add a new task', done: false },
        { id: 4, title: 'Fix an ability to toggle a task', done: false },
        { id: 5, title: 'Fix an ability to delete a task', done: false },
        { id: 6, title: 'Fix an ability to count completed tasks', done: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                done: false
            }
            state.push(newTodo);
        }
    }
});

export const { addTodo } = todoSlice.actions;