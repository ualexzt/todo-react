import React from 'react';

interface TaskContextPops {
  handleChanged: (value: number) => void;
  handleRemove: (value: number) => void;
}

const TaskContext = React.createContext<TaskContextPops>({
  handleChanged: () => {},
  handleRemove: () => {},
});
export default TaskContext;
