import React from "react";
import s from "./Gallery.module.scss";

export default function Gallery() {
  return (
    <div className={s.outer}>
      <div className={s.inner}>
        <h3>#ojjo_jewerly</h3>
        <h2>Мы в социальных сетях</h2>
        <div className={s.gallery}>
          <div>
            <img src={require("./../../img/gallery/img--hover.png")} alt="" />
          </div>

          <div>
            <img
              src={require("./../../img/gallery/gallery__image.png")}
              alt=""
            />
          </div>
          <div>
            <img
              src={require("./../../img/gallery/gallery__image (1).png")}
              alt=""
            />
          </div>
          <div>
            <img
              src={require("./../../img/gallery/gallery__image (2).png")}
              alt=""
            />
          </div>
          <div>
            <img
              src={require("./../../img/gallery/gallery__image (3).png")}
              alt=""
            />
          </div>
          <div>
            <img src={require("./../../img/gallery/Rectangle 8.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
