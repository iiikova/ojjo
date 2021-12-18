import React from "react";
import s from "./Header.module.scss";

export default function Header() {
  return (
    <div>
      <header>
        <div>
          <p>Контрагентам</p>
          <p>Дизайнерам</p>
          <p>Вакансии</p>
        </div>
        <div className={s.logo}></div>
        <div>
          <p>Поиск</p>
          <p>Вход/Регистрация</p>
          <p>Accaunt</p>
          <p>like</p>
        </div>
      </header>
      <div>
        <h1>Долго, дорого, богато!</h1>
        <button>каталог изделий </button>
      </div>
      <hr />
      <div>
        <div className="brand">brand</div>
        <div className="brand">brand</div>
        <div className="brand">brand</div>
        <div className="brand">brand</div>
        <div className="brand">brand</div>
        <div className="brand">brand</div>
      </div>
    </div>
  );
}
