import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskBoard } from './components/TaskBoard';
export function App() {
  return (
    <div className="App">
      <Header />
      <NewTask />
      <TaskBoard />
    </div>
  );
}
