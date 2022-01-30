import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { ITodo } from './types/itodo';
import AddTodo from './componets/addTodo';
import ListTodos from './componets/listTodos';
import TaskContext from './context/TaskContext';

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handelChange: React.ChangeEventHandler<HTMLInputElement> = (text) => {
    return setValue(text.target.value);
  };
  const handelAdd: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== 'Enter') return;
    const newTodo: ITodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setValue('');
    return todos;
  };
  const handleRemove = (value: number): void => {
    const idx = todos.findIndex((item: ITodo) => item.id === value);
    todos.splice(idx, 1);
    setTodos([...todos]);
  };
  const handleChanged = (value: number): void => {
    const idx = todos.findIndex((item: ITodo) => item.id === value);
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
  };

  return (
    <TaskContext.Provider value={{ handleRemove, handleChanged }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5, mb: 5 }}>
        <Typography gutterBottom variant="h2" color={'#2196f3'}>
          Tasks List
        </Typography>
        <AddTodo value={value} AddTodo={handelAdd} onChange={handelChange} />
        {todos.length ? (
          <ListTodos todos={todos} />
        ) : (
          <Typography sx={{ fontWeight: 'bold', mt: 5 }} variant="h5">
            You have not created notes
          </Typography>
        )}
      </Container>
    </TaskContext.Provider>
  );
}

export default App;
