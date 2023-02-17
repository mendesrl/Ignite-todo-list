/* eslint-disable react/jsx-key */
import './TaskBoard.modules.css';
import { ClipboardText } from 'phosphor-react';
import { Task } from './Task';

const tasks = [
  {
    id: 1,
    description: 'Task 1',
    completed: true,
  },
  {
    id: 2,
    description: 'Task 2',
    completed: false,
  },
];

export function TaskBoard() {
  return (
    <main className="task-board">
      <div className="task-status">
        <div>
          <span className="task-status__text task-status__text--blue">
            Tarefas criadas
          </span>
          <div className="task-status__badge">
            <span className="task-status__number">0</span>
          </div>
        </div>
        <div>
          <span className="task-status__text task-status__text--purple">
            Concluídas
          </span>
          <div className="task-status__badge">
            <span className="task-status__number">0</span>
          </div>
        </div>
      </div>

      <div className="task-board-empty">
        <ClipboardText size={56} weight="thin" />
        <p className="task-board-empty__text--bold">
          Você ainda não tem tarefas cadastradas
        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>

      <div className="tasks">
        {tasks.map((task) => {
          return (
            <Task
              id={task.id}
              description={task.description}
              completed={task.completed}
            />
          );
        })}
      </div>
    </main>
  );
}
