import React from 'react'


export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {


    return (
        <section className="showTask">
            <div className='head'>
                <div>
                    <span className='title'>Todo</span>
                    <span className='count'>{taskList.length}</span>
                </div>
                <button className='clearAll' onClick={() => setTaskList([])}>Clear All</button>
            </div>
            <ul>
                {taskList.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className='name'>{task.name}</span>
                            <span className='time'>{task.time}</span>
                        </p>
                        <i className='bi-pencil-square' onClick={() => setTask(taskList.find(t => t.id === task.id))}></i>
                        <i className='bi-trash' onClick={() => setTaskList(taskList.filter(t => t.id !== task.id))}></i>
                    </li>
                ))}

            </ul>
        </section>
    )
}

