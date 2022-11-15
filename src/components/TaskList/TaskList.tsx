import { Task } from '../Task/Task'
import styles from './TaskList.module.css'
import { useState } from 'react'
import React from 'react'
import { Form } from '../Form/Form'

interface Task {
    id: string,
    content: string,
    completed: boolean
}

export function TaskList() {

    const [tasks, setTasks] = useState([] as Task[])

    function deleteTask(taskIdToDelete: string) {
        const taskListWithoutDeletedOne = tasks.filter(task => {
            return task.id !== taskIdToDelete
        })

        setTasks(taskListWithoutDeletedOne)
    }

    function updateTaskStatus(taskIdToUpdate: string, taskStatusToSet: boolean) {
        const taskListWithUpdatedTask = tasks.map(task => {
            if (task.id === taskIdToUpdate) {
                return { ...task, completed: taskStatusToSet };
            } else {
                return task;
            }
        })

        setTasks(taskListWithUpdatedTask)
    }

    function createNewTask(taskToAdd: task) {
        const newTaskList = [...tasks, taskToAdd]

        setTasks(newTaskList)
    }

    const taskCounter = tasks.length;

    const taskCompletedCounter = tasks.reduce((counter, task) => task.completed === true ? ++counter : counter, 0)

    return (
        <React.Fragment>
            <Form onCreateNewTask={createNewTask} />

            <section className={styles.tasklist_wrapper}>
                <div className={styles.tasklist_header}>
                    <div className={styles.total_created}>
                        Created tasks <span className={styles.bullet}>{taskCounter}</span>
                    </div>
                    <div className={styles.total_completed}>
                        Completed tasks <span className={styles.bullet}>{taskCompletedCounter} of {taskCounter}</span>
                    </div>
                </div>
                <div className={styles.tasklist_body}>
                    {tasks.map(task => {
                        return (
                            <Task
                                id={task.id}
                                key={task.id}
                                content={task.content}
                                completed={task.completed}
                                onTaskStatusChange={updateTaskStatus}
                                onDeleteTask={deleteTask}
                            />
                        )
                    })}

                </div>
            </section>
        </React.Fragment>
    )
}