import React, { useState, useEffect } from 'react';
import Calendar from '../Calendar/Calendar';

function PopBrowse({ isOpen, task, onClose, onUpdateTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const [selectedStatus, setSelectedStatus] = useState(task?.status || 'need-to-do');

  useEffect(() => {
    if (task) {
      setEditedTask(task);
      setSelectedStatus(task.status);
    }
  }, [task]);

  if (!isOpen || !task) return null;

  const handleSave = () => {
    onUpdateTask({ ...editedTask, status: selectedStatus });
    setIsEditing(false);
  };

  const statuses = [
    { value: 'no-status', label: 'Без статуса' },
    { value: 'need-to-do', label: 'Нужно сделать' },
    { value: 'in-progress', label: 'В работе' },
    { value: 'testing', label: 'Тестирование' },
    { value: 'done', label: 'Готово' }
  ];

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              {isEditing ? (
                <input className="pop-browse__ttl" value={editedTask.title} onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })} />
              ) : (
                <h3 className="pop-browse__ttl">{task.title}</h3>
              )}
              <div className={`categories__theme theme-top _orange _active-category`}>
                <p className="_orange">{task.category}</p>
              </div>
            </div>

            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {statuses.map((status) => (
                  <div key={status.value} className={`status__theme ${selectedStatus !== status.value ? '_hide' : ''} ${status.value === 'need-to-do' ? '_gray' : ''}`} onClick={() => !isEditing && setSelectedStatus(status.value)}>
                    <p className={status.value === 'need-to-do' ? '_gray' : ''}>{status.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pop-browse__wrap">
              <form className="pop-browse__form form-browse">
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                  {isEditing ? (
                    <textarea className="form-browse__area" name="text" id="textArea01" value={editedTask.description} onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })} placeholder="Введите описание задачи..." />
                  ) : (
                    <textarea className="form-browse__area" name="text" id="textArea01" readOnly value={task.description} placeholder="Введите описание задачи..." />
                  )}
                </div>
              </form>
              <Calendar selectedDate={isEditing ? editedTask.date : task.date} onDateSelect={(date) => isEditing && setEditedTask({ ...editedTask, date })} isBrowseMode={true} />
            </div>

            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className={`categories__theme _orange _active-category`}>
                <p className="_orange">{task.category}</p>
              </div>
            </div>

            {!isEditing ? (
              <div className="pop-browse__btn-browse">
                <div className="btn-group">
                  <button className="btn-browse__edit _btn-bor _hover03" onClick={() => setIsEditing(true)}>Редактировать задачу</button>
                  <button className="btn-browse__delete _btn-bor _hover03" onClick={() => onDeleteTask(task.id)}>Удалить задачу</button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01" onClick={onClose}>Закрыть</button>
              </div>
            ) : (
              <div className="pop-browse__btn-edit">
                <div className="btn-group">
                  <button className="btn-edit__edit _btn-bg _hover01" onClick={handleSave}>Сохранить</button>
                  <button className="btn-edit__edit _btn-bor _hover03" onClick={() => setIsEditing(false)}>Отменить</button>
                  <button className="btn-edit__delete _btn-bor _hover03" onClick={() => onDeleteTask(task.id)}>Удалить задачу</button>
                </div>
                <button className="btn-edit__close _btn-bg _hover01" onClick={onClose}>Закрыть</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopBrowse;