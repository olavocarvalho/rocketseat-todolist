import styles from './Form.module.css';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { useState, ChangeEvent, FormEvent, SyntheticEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface OnCreateNewTask {
    id: string,
    content: string,
    completed: boolean
}

interface FormProps {
    onCreateNewTask: ({ id, content, completed }: OnCreateNewTask) => void
}

interface AddTaskFormElements extends HTMLFormControlsCollection {
    taskToAdd: HTMLInputElement;
}
interface AddTaskForm extends HTMLFormElement {
    readonly elements: AddTaskFormElements;
}

export function Form({ onCreateNewTask }: FormProps) {

    const [tasks, setTasks] = useState("")
    const [taskText, setTaskText] = useState("")

    function handleCreateNewTask(event: FormEvent<AddTaskForm>) {
        event.preventDefault()
        const target = event.currentTarget.elements;

        const newTask = target.taskToAdd.value
        onCreateNewTask({ id: uuidv4(), content: newTask, completed: false })
        setTaskText("");

    }

    function handleTaskToAddChange(event: ChangeEvent<HTMLInputElement>) {
        const newTaskText = event.target.value
        setTaskText(newTaskText)
    }

    return (
        <form onSubmit={handleCreateNewTask} className={styles.form_wrapper}>
            <input
                type="text"
                name="taskToAdd"
                value={taskText}
                placeholder="Type here the task you want to add"
                onChange={handleTaskToAddChange} />
            <button type="submit">Create <PlusCircledIcon /></button>
        </form>
    )
}