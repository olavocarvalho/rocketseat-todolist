interface TaskProps {
    id: string,
    content: string,
    completed: boolean
    onDeleteTask: Function,
    onTaskStatusChange: Function
}

import styles from './Task.module.css'
import * as Checkbox from '@radix-ui/react-checkbox';
import { TrashIcon, CheckIcon } from '@radix-ui/react-icons'
import { useState } from 'react';

export function Task({ id, content, completed, onDeleteTask, onTaskStatusChange }: TaskProps) {

    const [isCompleted, setIsCompleted] = useState(completed)

    function handleDeleteTask() {
        onDeleteTask(id)
    }

    function handleTaskStatus(event: boolean) {
        onTaskStatusChange(id, event)
    }
    return (
        <div className={styles.task_item}>
            <div className={styles.checkbox_container}>
                <Checkbox.Root className={styles.CheckboxRoot} id={id} checked={isCompleted} onCheckedChange={handleTaskStatus}>
                    <Checkbox.Indicator className={styles.CheckboxIndicator}>
                        <CheckIcon />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <label className={styles.Label} htmlFor={id}>
                    {content}
                </label>
            </div>
            <button className="delete" onClick={handleDeleteTask}>
                <TrashIcon />
            </button>
        </div >
    )
}