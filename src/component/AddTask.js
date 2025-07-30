import React from 'react'

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
    const handleSubmit = (event) => {

        event.preventDefault();
        if (task.id) {
            const updatedTask = taskList.map(t => t.id === task.id ? { ...t, name: event.target.task.value } : t);
            setTaskList(updatedTask);
            setTask({});
        } else {
            const date = new Date();
            const task = {
                id: date.getTime(),
                name: event.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            };
            setTaskList([...taskList, task]);

            setTask({}); // Reset the task input
        }


    };


    return (
        <section className="addTask">

            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={task.name || ""} autoComplete="off" placeholder="Add Task" maxLength="25" onChange={(e) => setTask({ ...task, name: e.target.value })} />
                <button type="submit">{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
    )
}
