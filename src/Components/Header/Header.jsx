import React from "react";
import s from "./Header.module.scss";

export default function Header() {
  return (
    <div className={s.outer}>
      <div className={s.inner}>
        <header>
          <div className={s.nav}>
            <p>Контрагентам</p>
            <p>Дизайнерам</p>
            <p>Вакансии</p>
          </div>
          <div className={s.logo}>
            <img src={require("../../img/logo.png")} alt="ojjo" />
          </div>
          <div className={s.nav}>
            <p className={s.search}>
            <span class="material-icons">search</span> 
            </p>
            <p>Вход/Регистрация</p>
            <p>
              <span class="material-icons">person</span>
            </p>
            <p>
              <span class="material-icons">favorite</span>
            </p>
          </div>
        </header>
        <div className={s.main}>
          <div className={s.title}>
            <h1>Долго, дорого, богато!</h1>
            <button>каталог изделий </button>
          </div>
          <hr />
          <div className={s.brands}>
            <div>
              <img
                src={require("./../../img/first-screen__brands-item.png")}
                alt="brands"
              />
            </div>
            <div>
              <img
                src={require("./../../img/first-screen__brands-item.png")}
                alt="brands"
              />
            </div>
            <div>
              <img
                src={require("./../../img/first-screen__brands-item.png")}
                alt="brands"
              />
            </div>
            <div>
              <img
                src={require("./../../img/first-screen__brands-item.png")}
                alt="brands"
              />
            </div>
            <div>
              <img
                src={require("./../../img/first-screen__brands-item.png")}
                alt="brands"
              />
            </div>
            <div>
              <img src={require("./../../img/Rectangle 2.png")} alt="brands" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
