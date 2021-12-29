import React from "react";
import s from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className={s.outer}>
      <div className={s.inner}>
        <div>
          <h3>Полезные ссылки</h3>
          <p className={s.p_top}>Доставка</p>
          <p>Оплата </p>
          <p>Акции</p>
          <p>Политика конфиденциальности</p>
        </div>
        <div>
          <h3>оплата</h3>
          <p className={s.p_top}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            justo, nec, pellentesque.
          </p>
          <div className={s.payment}>
            <div>
              <img src={require("./../../img/ms.png")} alt="" />
            </div>
            <div>
              <img src={require("./../../img/visa.png")} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h3>контакты</h3>
          <p className={s.p_top}>
            {" "}
            <span class="material-icons">local_phone</span>8 (812) 234-56-55
          </p>
          <p>
            <span class="material-icons">local_phone</span>8 (812) 234-56-55
          </p>
          <p>
            <span class="material-icons">email</span>ojjo@ojjo.ru
          </p>
        </div>
        <div>
          <h3>социальные сети</h3>
          <p className={s.p_top}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            justo, nec, pellentesque.
          </p>
          <div className={s.social}>
            <p>
              <i class="fab fa-youtube"></i>
            </p>
            <p>
              <i class="fab fa-vk"></i>
            </p>
            <p>
              <i class="fab fa-facebook-f"></i>
            </p>
            <p>
              <i class="fab fa-telegram-plane"></i>
            </p>
            <p>
              <i class="fab fa-etsy"></i>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div className={s.footer_pr}>
          <p>(c) 2020 OJJO jewelry</p>
          <p>Договор публичной офферты</p>
          <p>Контрагентам</p>
          <p>Сделано Figma.info</p>
        </div>
      </div>
    </div>
  );
}
