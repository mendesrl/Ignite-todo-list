/* eslint-disable react/jsx-key */
import './TaskBoard.modules.css';
import { ClipboardText } from 'phosphor-react';
import { Task } from './Task';
import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

export function TaskBoard() {
  //state : variavel que armazena o estado atual do componente (monitorada)
  const [tarefas, setTarefas] = useState([
    {id: uuidv4(), description: '1 Criar um novo tarefa', completed: false},
    {id: uuidv4(), description: '2 Criar um novo tarefa', completed: true}
  ])

  const [tasks, setTasks] = useState([{}]);
  const isEmpty = tarefas.length === 0;
  const totalTasks = tarefas.length;
  const completedTasks = tarefas.filter((task) => task.completed).length;

  function handleCreateNewTask(event: any)  {
    event.preventDefault();
    const newDescriptionTask = {
      id: uuidv4(),
      description: event.target.descriptionTask.value,
      completed: false,
    }
    setTarefas([...tarefas, newDescriptionTask]);
    event.target.descriptionTask.value = '';
  }

  function deleteTask(id: string) {
    const tasksWithoutDeleteOne = tarefas.filter((task) => task.id!== id);
    setTarefas(tasksWithoutDeleteOne);
  }

  function completeTask(id: string) {
    const taskCompleted = tarefas.map((task) => {
      if(task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task
    })
    setTarefas(taskCompleted)
  }
  function handleNewTaskChange() {
    event.target.setCustomValidity('')
  }
  function handleNewTaskInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatorio')
  }
  return (
    <>
      <form onSubmit={event => handleCreateNewTask(event)}>
        <div className="new-task">
          <input
            name="descriptionTask"
            className="new-task__input"
            placeholder="Adicione uma nova tarefa"
            required
            autoComplete='off'
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
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
              <span className="task-status__number">{completedTasks} de {totalTasks}</span>
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
            {tarefas.map((tarefa) => {
              return (
                <Task
                  id={tarefa.id}
                  key={tarefa.id}
                  description={tarefa.description}
                  onCompleteTask={completeTask}
                  onDeleteTask={deleteTask}
                  completed={tarefa.completed}
                />
              );
            })}
          </div>
        )}
      </main>
    </>
  );
}
