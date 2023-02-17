import './Task.modules.css';
import { Trash } from 'phosphor-react';

export function Task(props: any) {
  return (
    <>
      <div className="task">
        <div className="task__input">
          <input type="checkbox" id={`checkbox-${props.id}`} checked={props.completed} />
        </div>
        <div className="task__description">
          <label
            className={props.completed? '':'task__description__text'}
            htmlFor={`checkbox-${props.id}`}
          >
            {props.description}
          </label>
        </div>
        <div className="task__actions">
          <Trash size={18} weight="bold" />
        </div>
      </div>
    </>
  );
}
