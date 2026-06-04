import React, { useState } from 'react';
// import { Calendar } from '../Calendar/Calendar';
import { SPopNewCard, 
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
    SPopCategoriesThemE } from './PopNewCard.styled';

export const PopNewCard = () => {
  return (
   <SPopNewCard className="pop-new-card" id="popNewCard">
    <SNewCardContainer className="pop-new-card__container">
        <SNewCardBlock className="pop-new-card__block">
            <SNewCardContent className="pop-new-card__content">
                <SNewCardTtl className="pop-new-card__ttl">Создание задачи</SNewCardTtl>
                <SNewCardClose href="#" className="pop-new-card__close">&#10006;</SNewCardClose>
                <SNewCardWrap className="pop-new-card__wrap">
                    <SNewCardForm className="pop-new-card__form form-new" id="formNewCard" action="#">
                        <div className="form-new__block">
                            <SFormSubTttl htmlFor="formTitle" className="subttl">Название задачи</SFormSubTttl>
                            <SFormNewInput className="form-new__input" type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus/>
                        </div>


                        <SNewCardFormNewBlock className="form-new__block">
                            <SFormSubTttl htmlFor="textArea" className="subttl">Описание задачи</SFormSubTttl>
                            <SFormNewArea className="form-new__area" name="text" id="textArea" placeholder="Введите описание задачи..."></SFormNewArea>
                        </SNewCardFormNewBlock>
                    </SNewCardForm>
                    <div className="pop-new-card__calendar calendar">
                 
                    </div>
                </SNewCardWrap>
                <SPopCategories className="pop-new-card__categories categories">
                    <SFormSubTttlP className="subttl">Категория</SFormSubTttlP>
                    <SPopCategoriesThemes className="categories__themes">
                        <SPopCategoriesThemE className="categories__theme _orange _active-category"><p className="_orange">Web Design</p></SPopCategoriesThemE>
                        <SPopCategoriesThemE className="categories__theme _green"><p className="_green">Research</p></SPopCategoriesThemE>
                        <SPopCategoriesThemE className="categories__theme _purple"><p className="_purple">Copywriting</p></SPopCategoriesThemE>
                    </SPopCategoriesThemes>
                </SPopCategories>
                <SFormNewCreate className="form-new__create _hover01" id="btnCreate">Создать задачу</SFormNewCreate>
            </SNewCardContent>
        </SNewCardBlock>
    </SNewCardContainer>
</SPopNewCard>
  );
};