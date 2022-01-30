import React, { useContext } from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ITodo } from '../types/itodo';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskContext from '../context/TaskContext';

interface ItemTodoProps {
  itemTodo: ITodo;
}

function ItemTodo({ itemTodo }: ItemTodoProps) {
  const { handleChanged, handleRemove } = useContext(TaskContext);

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
        <ListItemText
          sx={itemTodo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
          primary={itemTodo.title}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default ItemTodo;
