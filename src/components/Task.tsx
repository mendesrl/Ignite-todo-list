/* eslint-disable react/prop-types */
import './Task.modules.css';
import { Trash } from 'phosphor-react';

export function Task({id,description, completed, onDeleteTask}) {
  function handleDeleteTask() {
    onDeleteTask(id)
  }
  return (
    <>
      <div className="task">
        <div>
          <input
            type="checkbox"
            id={`checkbox-${id}`}
            checked={completed}
          />
        </div>
        <div className="task__description">
          <label
            className={
              completed
                ? 'task__description--complete'
                : 'task__description--incomplete'
            }
            htmlFor={`checkbox-${id}`}
          >
            {description}
          </label>
        </div>
        <div className="task__actions" onClick={handleDeleteTask}>
          <Trash size={16} weight="bold" />
        </div>
      </div>
    </>
  );
}
