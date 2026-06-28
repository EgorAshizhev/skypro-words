import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import {
  SPopNewCard,
  SNewCardContainer,
  SNewCardBlock,
  SNewCardContent,
  SNewCardTtl,
  SNewCardClose,
  SNewCardWrap,
  SNewCardForm,
  SNewCardFormNewBlock,
  SFormNewInput,
  SFormNewArea,
  SFormNewCreate,
  SFormSubTttl,
  SFormSubTttlP,
  SPopCategories,
  SPopCategoriesThemes,
  SPopCategoriesThemE,
} from './PopNewCard.styled';

const CATEGORIES = [
  { label: 'Web Design', cls: '_orange' },
  { label: 'Research', cls: '_green' },
  { label: 'Copywriting', cls: '_purple' },
];

export const PopNewCard = () => {
  const navigate = useNavigate();
  const { onCreateCard } = useOutletContext();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [activeCategory, setActiveCategory] = useState('Web Design');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const onClose = () => navigate('/');

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleCreate = async () => {
    if (!title.trim()) return;
    setIsLoading(true);
    setError('');
    try {
      await onCreateCard?.({
        title: title.trim(),
        description: description.trim(),
        topic: activeCategory,
        status: 'Без статуса',
        date: new Date().toISOString(),
      });
      onClose();
    } catch (err) {
      setError(err.message || 'Не удалось создать задачу');
      setIsLoading(false);
    }
  };

  return (
    <SPopNewCard className="pop-new-card">
      <SNewCardContainer className="pop-new-card__container" onClick={handleBackdropClick}>
        <SNewCardBlock className="pop-new-card__block">
          <SNewCardContent className="pop-new-card__content">
            <SNewCardTtl className="pop-new-card__ttl">Создание задачи</SNewCardTtl>
            <SNewCardClose
              href="#"
              className="pop-new-card__close"
              onClick={(e) => { e.preventDefault(); onClose(); }}
            >
              &#10006;
            </SNewCardClose>
            <SNewCardWrap className="pop-new-card__wrap">
              <SNewCardForm className="pop-new-card__form form-new" id="formNewCard">
                <div className="form-new__block">
                  <SFormSubTttl htmlFor="formTitle" className="subttl">
                    Название задачи
                  </SFormSubTttl>
                  <SFormNewInput
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                <SNewCardFormNewBlock className="form-new__block">
                  <SFormSubTttl htmlFor="textArea" className="subttl">
                    Описание задачи
                  </SFormSubTttl>
                  <SFormNewArea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={isLoading}
                  />
                </SNewCardFormNewBlock>
              </SNewCardForm>
              <div className="pop-new-card__calendar calendar" />
            </SNewCardWrap>
            <SPopCategories className="pop-new-card__categories categories">
              <SFormSubTttlP className="subttl">Категория</SFormSubTttlP>
              <SPopCategoriesThemes className="categories__themes">
                {CATEGORIES.map(({ label, cls }) => (
                  <SPopCategoriesThemE
                    key={label}
                    className={`categories__theme ${cls} ${activeCategory === label ? '_active-category' : ''}`}
                    onClick={() => !isLoading && setActiveCategory(label)}
                    style={{ cursor: 'pointer' }}
                  >
                    <p className={cls}>{label}</p>
                  </SPopCategoriesThemE>
                ))}
              </SPopCategoriesThemes>
            </SPopCategories>

            {error && (
              <p style={{ color: '#e53e3e', fontSize: '14px', margin: '8px 0' }}>
                {error}
              </p>
            )}

            <SFormNewCreate
              className="form-new__create _hover01"
              id="btnCreate"
              onClick={handleCreate}
              disabled={!title.trim() || isLoading}
              style={{ opacity: title.trim() && !isLoading ? 1 : 0.5 }}
            >
              {isLoading ? 'Создание...' : 'Создать задачу'}
            </SFormNewCreate>
          </SNewCardContent>
        </SNewCardBlock>
      </SNewCardContainer>
    </SPopNewCard>
  );
};