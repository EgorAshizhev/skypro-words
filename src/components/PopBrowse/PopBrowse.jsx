import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTasks } from '../../context/TaskContext';
import { Calendar } from '../Calendar/Calendar';
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
  const { tasks, saveCard, deleteCard } = useTasks();
  const card = tasks.find((c) => String(c.id) === String(cardId));

  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (card) {
      setDescription(card.description || '');
      setStatus(card.status || 'Без статуса');
      setDate(card.date || '');
    }
    setIsEditing(false);
    setError('');
  }, [card]);

  useEffect(() => {
    if (!card) {
      navigate('/', { replace: true });
    }
  }, [card, navigate]);

  if (!card) return null;

  const onClose = () => navigate('/');

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    setDescription(card.description || '');
    setStatus(card.status || 'Без статуса');
    setDate(card.date || '');
    setIsEditing(false);
    setError('');
  };

  const handleSave = async () => {
    setIsSaving(true);
    setError('');
    try {
      await saveCard({ ...card, description, status, date });
      setIsEditing(false);
    } catch (err) {
      setError(err.message || 'Не удалось сохранить задачу');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    setError('');
    try {
      await deleteCard(card.id);
      onClose();
    } catch (err) {
      setError(err.message || 'Не удалось удалить задачу');
    }
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
            <SPopBroTopBlock>
              <SPopBroTtl>{card.title}</SPopBroTtl>
              <SPopBroCategoryBadge className={categoryClass}>
                <p className={categoryClass}>{card.topic}</p>
              </SPopBroCategoryBadge>
            </SPopBroTopBlock>

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
                <Calendar
                  value={date}
                  onChange={setDate}
                  readOnly={!isEditing}
                  label="Срок исполнения"
                />
              </SPopBroCalendarWrap>
            </SPopBroWrap>

            {error && (
              <p style={{ color: '#e53e3e', fontSize: '14px', margin: '8px 0' }}>
                {error}
              </p>
            )}

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
                    <SBtnPrimary onClick={handleSave} disabled={isSaving}>
                      {isSaving ? 'Сохранение...' : 'Сохранить'}
                    </SBtnPrimary>
                    <SBtnOutline onClick={handleCancel} disabled={isSaving}>Отменить</SBtnOutline>
                    <SBtnDanger onClick={handleDelete} disabled={isSaving}>Удалить задачу</SBtnDanger>
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