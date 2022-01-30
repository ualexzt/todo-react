import React, { ChangeEvent, useContext, useState } from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material';
import { ITodo } from '../types/itodo';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskContext from '../context/TaskContext';

interface ItemTodoProps {
  itemTodo: ITodo;
}

function ItemTodo({ itemTodo }: ItemTodoProps) {
  const { handleChanged, handleRemove, handleEditTask } = useContext(TaskContext);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState('');

  const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleTask = (e: React.FocusEvent<HTMLInputElement>) => {
    setEdit(false);
    handleEditTask(itemTodo.id, e.target.value);
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={() => handleRemove(itemTodo.id)}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={itemTodo.completed}
            onChange={() => handleChanged(itemTodo.id)}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        {edit ? (
          <TextField variant="standard" value={value} onChange={handleEdit} onBlur={handleTask} />
        ) : (
          <ListItemText
            sx={
              itemTodo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }
            }
            primary={itemTodo.title}
            onDoubleClick={() => {
              setEdit(true);
              setValue(itemTodo.title);
            }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
}

export default ItemTodo;
