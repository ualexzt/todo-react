import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, List, Typography } from '@mui/material';
import { ITodo } from '../types/itodo';
import ItemTodo from './itemTodo';

interface PlaceTodoProps {
  todos: ITodo[];
}

// function filterReducer(state: ITodo[], action: TodoAction) {
//   console.log(state);
//   switch (action.type) {
//     case 'active':
//       return state.filter((item) => item.completed);
//     case 'complete':
//       return state.filter((item) => !item.completed);
//     case 'all':
//       return state;
//     default:
//       return state;
//   }
// }

function ListTodos({ todos }: PlaceTodoProps) {
  const [state, setState] = useState<ITodo[]>(todos);

  useEffect(() => {
    return setState(todos);
  }, [todos]);

  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardContent>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {state.map((item) => (
            <ItemTodo key={item.id} itemTodo={item} />
          ))}
        </List>
      </CardContent>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 5 }}>
        <Box>
          <Typography variant="body2">Item count: {todos.length}</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Button size="small" onClick={() => setState(todos)}>
            All
          </Button>
          <Button size="small" onClick={() => setState(todos.filter((item) => !item.completed))}>
            Active
          </Button>
          <Button size="small" onClick={() => setState(todos.filter((item) => item.completed))}>
            Completed
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default ListTodos;
