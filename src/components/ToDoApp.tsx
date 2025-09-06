import { useState } from "react"
import { Tasks } from "./Tasks"

export const ToDoApp = () => {

    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState<string[]>([]);
    const onDelete = (index: number) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

  return (
    <div>
        <h1>ToDo App</h1>
        <div className="flex">
            <input type="text" 
            placeholder="New Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)} 
            />
            <button onClick={() => {
                if(newTask.trim() !== '') {
                    setTasks([...tasks, newTask]);
                    setNewTask('');
                }
            }}>Add</button>
        </div>
        <Tasks tasks={tasks} onDelete={onDelete} />
    </div>
  )
}