import "./NewTask.modules.css";
import { PlusCircle } from "phosphor-react";

export function NewTask() {
  return (
    <div className="new-task">
      <input
        className="new-task__input"
        placeholder="Adicione uma nova tarefa"
      ></input>
      <button className="new-task__button">
        <span>Criar</span>
        <PlusCircle size={18} weight="bold" />
      </button>
    </div>
  );
}
