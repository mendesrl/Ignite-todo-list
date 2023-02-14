import "./TaskBoard.modules.css";
import { ClipboardText, Trash } from "phosphor-react";

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
        <div className="task">
          <div className="task__title">
            <input type="checkbox" id="checkbox-1" name="checkbox-1" checked />
          </div>
          <div className="task__description">
            <span className="task__description__text">
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </span>
          </div>
          <div className="task__actions">
            <Trash size={14} weight="bold" />
          </div>
        </div>
        <div className="task">
          <div className="task__title">
            <input type="checkbox" id="checkbox-2" name="checkbox-2" />
          </div>
          <div className="task__description">
            <span className="task__description__text">
              Integer.
            </span>
          </div>
          <div className="task__actions">
            <Trash size={18} weight="bold" />
          </div>
        </div>
      </div>
    </main>
  );
}
