/* eslint-disable react/jsx-key */
import './TaskBoard.modules.css';
import { ClipboardText } from 'phosphor-react';
import { Task } from './Task';
import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';

export function TaskBoard(props: any) {
  //state : variavel que armazena o estado atual do componente (monitorada)
  const [tasks, setTasks] = useState([
    // {
    //   id: 2,
    //   description: 'Task 2',
    //   completed: false,
    // },
  ]);
  const [newTask, setNewTask] = useState('');
  const isEmpty = tasks.length === 0;
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  function handleCreateNewTask() {
    event.preventDefault();
    const newDescriptionTask = {
      id:3,
      description: event.target.descriptionTask.value,
      completed: false,
    }
    setTasks([...tasks, newDescriptionTask]);
    event.target.descriptionTask.value = '';
  }

  // function handleDeleteTask(id) {
  //   var
  // }

  return (
    <>
      <form onSubmit={handleCreateNewTask}>
        <div className="new-task">
          <input
            name="descriptionTask"
            className="new-task__input"
            placeholder="Adicione uma nova tarefa"
          ></input>
          <button className="new-task__button" type="submit">
            <span>Criar</span>
            <PlusCircle size={18} weight="bold" />
          </button>
        </div>
      </form>

      <main className="task-board">
        <div className="task-status">
          <div>
            <span className="task-status__text task-status__text--blue">
              Tarefas criadas
            </span>
            <div className="task-status__badge">
              <span className="task-status__number">{totalTasks}</span>
            </div>
          </div>
          <div>
            <span className="task-status__text task-status__text--purple">
              Concluídas
            </span>
            <div className="task-status__badge">
              <span className="task-status__number">{completedTasks}</span>
            </div>
          </div>
        </div>

        {isEmpty && (
          <div className="task-board-empty">
            <ClipboardText size={56} weight="thin" />
            <p className="task-board-empty__text--bold">
              Você ainda não tem tarefas cadastradas
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}

        {!isEmpty && (
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
        )}
      </main>
    </>
  );
}
