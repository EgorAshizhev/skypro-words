import React, { useState } from 'react';
import { Card } from '../Card/Card';

export const Column = () => {
  return (
    <div class="main__column column">
    <div class="column__title">
        <p>Без статуса</p>
    </div>
    <div class="cards">
        <div class="cards__item">
            <div class="cards__card card">
                <div class="card__group">
                    <div class="card__theme _orange">
                        <p class="_orange">Web Design</p>
                    </div>
                    <a href="#popBrowse" target="_self">
                        <div class="card__btn">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </a>
                </div>
                <div class="card__content">
                    <a href="" target="_blank">
                        <h3 class="card__title">Название задачи</h3>
                    </a>
                    <div class="card__date">
                        {/* <svg ...>...</svg> */}
                        <p>30.10.23</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
  );
};