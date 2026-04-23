import React from 'react';
import Column from '../Column/Column';

function Main({ tasks, onOpenBrowse }) {
  const columns = [
    { title: 'Без статуса', status: 'no-status' },
    { title: 'Нужно сделать', status: 'need-to-do' },
    { title: 'В работе', status: 'in-progress' },
    { title: 'Тестирование', status: 'testing' },
    { title: 'Готово', status: 'done' },
  ];

  const getTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((column, index) => (
              <Column key={index} title={column.title} tasks={getTasksByStatus(column.status)} onOpenBrowse={onOpenBrowse} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;