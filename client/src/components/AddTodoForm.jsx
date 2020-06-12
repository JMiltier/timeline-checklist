import React from 'react';

const AddTodoForm = () => {
  return (
    <form>
      <label className ='taskLabels'>Task Name
        <input className='task' id='taskName'/>
      </label>
      <label className ='taskLabels'>Time
        <input className='time' id='timeHour' placeholder='HH'/>
        :
        <input className='time' id='timeMinute' placeholder='MM'/>
      </label>
      <label>
        <input className='timeTOD' id='timeRadioAM' name='AMPM' type='radio' value='AM'/><label htmlFor='AM'>AM</label>
        <input className='timeTOD' id='timeRadioPM' name='AMPM' type='radio' value='PM'/><label>PM</label>
      </label>
    </form>
  );
}

export default AddTodoForm;