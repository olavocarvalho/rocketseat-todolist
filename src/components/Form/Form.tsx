import styles from './Form.module.css';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function Form({ onCreateNewTask }) {

    const [tasks, setTasks] = useState("")
    const [taskText, setTaskText] = useState("")

    function handleCreateNewTask(event) {
        event.preventDefault()

        const newTask = event.target.taskToAdd.value
        onCreateNewTask({ id: uuidv4(), content: newTask })
        setTaskText("");

    }

    function handleTaskToAddChange(event): void {
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