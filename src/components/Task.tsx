import './Task.modules.css';
import { Trash } from 'phosphor-react';

export function Task(props: any) {
  return (
    <>
      <div className="task">
        <div>
          <input
            type="checkbox"
            id={`checkbox-${props.id}`}
            checked={props.completed}
          />
        </div>
        <div className="task__description">
          <label
            className={
              props.completed
                ? 'task__description--complete'
                : 'task__description--incomplete'
            }
            htmlFor={`checkbox-${props.id}`}
          >
            {props.description}
          </label>
        </div>
        <div className="task__actions">
          <Trash size={16} weight="bold" />
        </div>
      </div>
    </>
  );
}
