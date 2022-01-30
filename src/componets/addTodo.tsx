import React from 'react';
import { TextField } from '@mui/material';

interface AddTodoProps {
  value: string;
  AddTodo: (value: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

function AddTodo({ value, AddTodo, onChange }: AddTodoProps) {
  return (
    <TextField
      label="Add todo"
      variant="outlined"
      fullWidth={true}
      value={value}
      onKeyPress={AddTodo}
      onChange={onChange}
    />
  );
}

export default AddTodo;
