import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


export const getTodosAsync = createAsyncThunk(
    'todos/getTodosAsync',
    async () => {
        try {
            const response = await fetch('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos/');
            if (response.ok) {
                const todos = await response.json();
                return { todos }
            }
        } catch (error) {
            toast.error('No se pudo realizar la acción');
        }
    }
);

export const addTodoAsync = createAsyncThunk(
    'todos/addTodoAsync',
    async (payload) => {
        try {
            const response = await fetch('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: Date.now(), label: payload.label, checked: false })
            });

            if (response.ok) {
                const todo = await response.json();
                return { todo }
            }
        } catch (error) {
            toast.error('No se pudo realizar la acción');
        }
    }
);

export const toggleCheckAsync = createAsyncThunk(
    'todos/toggleCheckAsync',
    async (payload) => {
        try {
            const response = await fetch(`https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos/${payload.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ checked: payload.checked }),
            });

            if (response.ok) {
                const todo = await response.json();
                return { id: todo.id, checked: todo.checked }
            }
        } catch (error) {
            toast.error('No se pudo realizar la acción');
        }
    }
);

export const deleteTodoAsync = createAsyncThunk(
    'todos/deleteTodoAsync',
    async (payload) => {
        try {
            const response = await fetch(`https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos/${payload.id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                return { id: payload.id }
            }
        } catch (error) {
            toast.error("No se pudo realizar la acción");
        }
    }
)