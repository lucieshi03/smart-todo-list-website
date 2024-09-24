import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
    return (
      <>
        {tasks.map((task) => (
          <div key={task.id} className='task'>
            <h3>
              {task.text} - <span>{task.category}</span>
              <button 
                onClick={() => onDelete(task.id)} 
                style={{ color: 'red' }}
              >Delete</button>
            </h3>
          </div>
        ))}
      </>
    )
  }
  
  export default Tasks;
  