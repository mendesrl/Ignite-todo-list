import "./TaskBoard.modules.css";
import { ClipboardText } from "phosphor-react";

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
      
      <div className="tasks">
      <ClipboardText size={56} weight="thin" />
        Você ainda não tem tarefas cadastradas Crie tarefas e organize seus
        itens a fazer
      </div>
    </main>
  );
}
