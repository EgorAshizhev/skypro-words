import React from 'react';
import Card from '../Card/Card';

function Column({ title, tasks, onOpenBrowse }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {tasks.map((task, index) => (
          <Card key={task.id || index} task={task} onOpenBrowse={onOpenBrowse} />
        ))}
      </div>
    </div>
  );
}

export default Column;