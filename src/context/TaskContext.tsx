import React from 'react';

interface TaskContextPops {
  handleChanged: (value: number) => void;
  handleRemove: (value: number) => void;
  handleEditTask: (id: number, value: string) => void;
}

const TaskContext = React.createContext<TaskContextPops>({
  handleChanged: () => {},
  handleRemove: () => {},
  handleEditTask: () => {},
});
export default TaskContext;
