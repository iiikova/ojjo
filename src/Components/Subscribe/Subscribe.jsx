import React from "react";
import s from "./Subscribe.module.scss";

export default function Subscribe() {
  return (
    <div className={s.outer}>
      <div className={s.inner}>
        <h3>Полезные советы и персональный предложения</h3>
        <h2>Эксклюзивная рассылка</h2>
        <div className={s.subscribe}>
          <div className={s.info}>
            <p>
              <span class="material-icons">play_arrow</span> Личный менеджер
            </p>
            <p>
              <span class="material-icons">play_arrow</span> Доставка и
              оформление
            </p>
            <p>
              <span class="material-icons">play_arrow</span> Индивидуальный
              дизайн
            </p>
          </div>
          <div className={s.input_outer}>
            <div className={s.input_inner}>
              <div>
                <input type="text" placeholder="Ваш e-mail" />
              </div>
              <button>отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
