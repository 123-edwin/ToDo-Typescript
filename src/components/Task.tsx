
type Props = {
    task: string;
    onDelete: () => void;
}

export const Task = ({ task, onDelete }: Props) => {
    return (
        <div className="task">
            <span>{task}</span>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}