import { Task } from "./Task";
type Props = {
    tasks: string[];
    onDelete: (index: number) => void;
}

export const Tasks = ({ tasks, onDelete }: Props) => {
  return (
    <div className="taskList">
        {tasks.map((task, index) => (
            <Task key={index} task={task} onDelete={() => onDelete(index)} />
        ))}
    </div>
  )
}