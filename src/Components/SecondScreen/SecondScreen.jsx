import React from "react";
import s from "./SecondScreen.module.scss";

export default function SecondScreen() {
  return (
    <div className={s.outer}>
      <div className={s.inner}>
        <div className={s.main}>
          <h3>К мероприятиям</h3>
          <h2>Настоящая красота здесь!</h2>
          <div className={s.links}>
            <div className={s.active}>Свадьба</div>
            <div>
              <p>МУЖУ</p>
            </div>
            <div>
              <p>жене</p>
            </div>
            <div>
              <p>партнеру</p>
            </div>
            <div>
              <p>коллекции</p>
            </div>
            <div>
              <p>редкость</p>
            </div>
          </div>
          <div className={s.category}>
            <div>
              <p>Кольца</p>
            </div>
            <div>
              <p>серьги</p>
            </div>
            <div>
              <p>подвески</p>
            </div>
            <div>
              <p>запонки</p>
            </div>
            <div>
              <p>браслеты</p>
            </div>
            <div>
              <p>часы</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
