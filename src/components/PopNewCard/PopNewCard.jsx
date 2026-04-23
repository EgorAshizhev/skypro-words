import React, { useState } from 'react';
import Calendar from '../Calendar/Calendar';

function PopNewCard({ isOpen, onClose, onCreateTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState('08.09.2023');
  const [selectedCategory, setSelectedCategory] = useState('Web Design');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTask({ title, description, date: selectedDate, category: selectedCategory, status: 'no-status' });
    onClose();
    setTitle('');
    setDescription('');
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a href="#" className="pop-new-card__close" onClick={(e) => { e.preventDefault(); onClose(); }}>&#10006;</a>
            <div className="pop-new-card__wrap">
              <form className="pop-new-card__form form-new" onSubmit={handleSubmit}>
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">Название задачи</label>
                  <input className="form-new__input" type="text" name="name" id="formTitle" placeholder="Введите название задачи..." value={title} onChange={(e) => setTitle(e.target.value)} autoFocus required />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">Описание задачи</label>
                  <textarea className="form-new__area" name="text" id="textArea" placeholder="Введите описание задачи..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
              </form>
              <Calendar onDateSelect={setSelectedDate} selectedDate={selectedDate} />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                {['Web Design', 'Research', 'Copywriting'].map(cat => (
                  <div key={cat} className={`categories__theme ${cat === 'Web Design' ? '_orange' : cat === 'Research' ? '_green' : '_purple'} ${selectedCategory === cat ? '_active-category' : ''}`} onClick={() => setSelectedCategory(cat)}>
                    <p className={cat === 'Web Design' ? '_orange' : cat === 'Research' ? '_green' : '_purple'}>{cat}</p>
                  </div>
                ))}
              </div>
            </div>
            <button className="form-new__create _hover01" onClick={handleSubmit}>Создать задачу</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;