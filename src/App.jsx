import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import PopExit from './components/PopExit/PopExit';
import './App.css';
import './main.css';
import './main_dark.css';

function App() {
  const [isNewCardOpen, setIsNewCardOpen] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [isExitOpen, setIsExitOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Название задачи', description: 'Описание задачи', date: '30.10.23', category: 'Web Design', status: 'no-status' },
    { id: 2, title: 'Название задачи', description: 'Описание задачи', date: '30.10.23', category: 'Research', status: 'no-status' },
    { id: 3, title: 'Название задачи', description: 'Описание задачи', date: '30.10.23', category: 'Web Design', status: 'need-to-do' },
  ]);

  const handleCreateTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setIsNewCardOpen(false);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setIsBrowseOpen(false);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    setIsBrowseOpen(false);
  };

  const handleOpenBrowse = (task) => {
    setSelectedTask(task);
    setIsBrowseOpen(true);
  };

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <div className="wrapper">
      <Header
        onOpenNewCard={() => setIsNewCardOpen(true)}
        onOpenPopExit={() => setIsExitOpen(true)}
        userName="Ivan Ivanov"
        userEmail="ivan.ivanov@gmail.com"
        onThemeToggle={handleThemeToggle}
        isDarkTheme={isDarkTheme}
      />
      <Main tasks={tasks} onOpenBrowse={handleOpenBrowse} />
      <PopNewCard isOpen={isNewCardOpen} onClose={() => setIsNewCardOpen(false)} onCreateTask={handleCreateTask} />
      <PopBrowse isOpen={isBrowseOpen} task={selectedTask} onClose={() => setIsBrowseOpen(false)} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
      <PopExit isOpen={isExitOpen} onClose={() => setIsExitOpen(false)} onConfirm={() => { console.log('Выход'); }} />
    </div>
  );
}

export default App;