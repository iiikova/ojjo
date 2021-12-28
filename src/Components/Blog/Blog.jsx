import React from "react";
import s from './Blog.module.scss'

export default function Blog() {
  return (
    <div className={s.outer}>
      <div className={s.inner}>
        <h3>Полезные статьи</h3>
        <h2>Лучшие советы по подбору дорогих подарков</h2>
        <div className={s.items}>
          <div>
            <p>Как выбрать
            <br /> часы для своей
            <br /> будущей жены</p>
          </div>
          <div>
            <p>Запонки для мужа:
            <br /> 7 ключевых правил
            <br /> покупки аксессуара</p>
          </div>
          <div>
            <p>Как выбрать
            <br /> обручальные кольца 
            <br /> молодоженам</p>
          </div>
        </div>
        <button>читать наш блог</button>
      </div>
    </div>
  );
}
