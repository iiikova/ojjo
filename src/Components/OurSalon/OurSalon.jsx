import React from "react";
import s from "./OurSalon.module.scss";

export default function OurSalon() {
  return (
    <div className={s.outer}>
      <div className={s.inner}>
        <h3>Не знаете, что выбрать?</h3>
        <h2>Посетите наши салоны в Москве</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis
          tortor vitae pellentesque egestas quam pulvinar. Pellentesque
          porttitor velit sit pellentesque. Suspendisse donec pretium id
          dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut
          ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi
          libero viverra ipsum.
        </p>
        <button>наши салоны</button>
      </div>
    </div>
  );
}
