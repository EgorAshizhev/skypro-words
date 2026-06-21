import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useOutletContext } from 'react-router-dom';
import {
  SPopBrowse,
  SPopBroContainer,
  SPopBroBlock,
  SPopBroClose,
  SPopBroContent,
  SPopBroTopBlock,
  SPopBroTtl,
  SPopBroCategoryBadge,
  SPopBroSubttl,
  SPopBroStatusBlock,
  SPopBroStatusThemes,
  SPopBroStatusTheme,
  SPopBroWrap,
  SPopBroFormBlock,
  SPopBroArea,
  SPopBroCalendarWrap,
  SPopBroDateLabel,
  SPopBroBtnGroup,
  SBtnLeft,
  SBtnPrimary,
  SBtnOutline,
  SBtnDanger,
} from './PopBrowse.styled';

const STATUSES = [
  { label: 'Без статуса', cls: '' },
  { label: 'Нужно сделать', cls: '_gray' },
  { label: 'В работе', cls: '_orange' },
  { label: 'Тестирование', cls: '_purple' },
  { label: 'Готово', cls: '_green' },
];

const getCategoryClass = (topic) => {
  const map = {
    'Web Design': '_orange',
    'Research': '_green',
    'Copywriting': '_purple',
    'Backend': '_gray',
    'Frontend': '_orange',
  };
  return map[topic] || '_gray';
};

export const PopBrowse = () => {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const { cards, onSaveCard, onDeleteCard } = useOutletContext();
  const card = cards.find((c) => String(c.id) === String(cardId));

  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (card) {
      setDescription(card.description || '');
      setStatus(card.status || 'Без статуса');
    }
    setIsEditing(false);
  }, [card]);


  useEffect(() => {
    if (!card) {
      navigate('/', { replace: true });
    }
  }, [card, navigate]);

  if (!card) {
    return null;
  }

  const onClose = () => navigate('/');

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    setDescription(card.description || '');
    setStatus(card.status || 'Без статуса');
    setIsEditing(false);
  };

  const handleSave = () => {
    onSaveCard?.({ ...card, description, status });
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDeleteCard?.(card.id);
    onClose();
  };

  const categoryClass = getCategoryClass(card.topic);

  return (
    <SPopBrowse className="pop-browse">
      <SPopBroContainer onClick={handleBackdropClick}>
        <SPopBroBlock>
          <SPopBroClose
            href="#"
            onClick={(e) => { e.preventDefault(); onClose(); }}
          >
            ✕
          </SPopBroClose>

          <SPopBroContent>
            {/* Заголовок + категория */}
            <SPopBroTopBlock>
              <SPopBroTtl>{card.title}</SPopBroTtl>
              <SPopBroCategoryBadge className={categoryClass}>
                <p className={categoryClass}>{card.topic}</p>
              </SPopBroCategoryBadge>
            </SPopBroTopBlock>

            {/* Статус */}
            <SPopBroStatusBlock>
              <SPopBroSubttl>Статус</SPopBroSubttl>
              <SPopBroStatusThemes>
                {STATUSES.map(({ label, cls }) => (
                  <SPopBroStatusTheme
                    key={label}
                    className={cls || ''}
                    $active={status === label}
                    $editable={isEditing}
                    onClick={() => isEditing && setStatus(label)}
                  >
                    <p className={cls || ''}>{label}</p>
                  </SPopBroStatusTheme>
                ))}
              </SPopBroStatusThemes>
            </SPopBroStatusBlock>

            {/* Описание + даты */}
            <SPopBroWrap>
              <SPopBroFormBlock>
                <SPopBroSubttl>Описание задачи</SPopBroSubttl>
                <SPopBroArea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  readOnly={!isEditing}
                  placeholder={isEditing ? 'Введите описание задачи...' : 'Описание не добавлено'}
                />
              </SPopBroFormBlock>

              <SPopBroCalendarWrap>
                <SPopBroSubttl>Даты</SPopBroSubttl>
                <SPopBroDateLabel>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.75 2.125H9.5V0.75H8.25V2.125H4.75V0.75H3.5V2.125H2.25C1.7 2.125 1.25 2.575 1.25 3.125V10.875C1.25 11.425 1.7 11.875 2.25 11.875H10.75C11.3 11.875 11.75 11.425 11.75 10.875V3.125C11.75 2.575 11.3 2.125 10.75 2.125ZM10.75 10.875H2.25V5.5H10.75V10.875Z" fill="#94A6BE"/>
                  </svg>
                  <span>{card.date || 'Не указано'}</span>
                </SPopBroDateLabel>
              </SPopBroCalendarWrap>
            </SPopBroWrap>

            {/* Кнопки */}
            <SPopBroBtnGroup>
              {!isEditing ? (
                <>
                  <SBtnLeft>
                    <SBtnOutline onClick={handleEdit}>Редактировать задачу</SBtnOutline>
                    <SBtnDanger onClick={handleDelete}>Удалить задачу</SBtnDanger>
                  </SBtnLeft>
                  <SBtnPrimary onClick={onClose}>Закрыть</SBtnPrimary>
                </>
              ) : (
                <>
                  <SBtnLeft>
                    <SBtnPrimary onClick={handleSave}>Сохранить</SBtnPrimary>
                    <SBtnOutline onClick={handleCancel}>Отменить</SBtnOutline>
                    <SBtnDanger onClick={handleDelete}>Удалить задачу</SBtnDanger>
                  </SBtnLeft>
                  <SBtnPrimary onClick={onClose}>Закрыть</SBtnPrimary>
                </>
              )}
            </SPopBroBtnGroup>
          </SPopBroContent>
        </SPopBroBlock>
      </SPopBroContainer>
    </SPopBrowse>
  );
};