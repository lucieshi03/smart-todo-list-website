import { useState } from 'react'
import { GiReturnArrow } from 'react-icons/gi'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')

    const classifyTask = async (task) => {
        try {
            const response = await fetch('http://localhost:5000/classify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'task-input': task }),
            });

            const data = await response.json();
            return data.category;
        } catch (error) {
            console.error("Error classifying task:", error);
        }
    }

const onSubmit = async (e) => {
    e.preventDefault();

    if(!text) {
        alert('Add a task');
        return;
    }

    const category = await classifyTask(text);

    onAdd({ text, category });

    setText('');
}

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input 
            type='text' 
            placeholder='Add Task' 
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        </div>
        <input type='submit' value='Save Task' className='btn btn-block' />
      
    </form>
  )
}

export default AddTask
