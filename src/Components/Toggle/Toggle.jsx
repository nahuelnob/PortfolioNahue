import { useState } from "react";
import style from './Toggle.module.css'

const Toggle = () => {
  const [switcher, setSwitcher] = useState(false);
  const handlerSwitch = () => {
    switcher ? setSwitcher(false) : setSwitcher(true);
  };
  return (
    <section className={style.switchDiv}>
      <div className={style.switch}>
        <button
          onClick={handlerSwitch}
          className={style.bola}
          style={{
            transform: `${switcher ? "translateX(0rem)" : "translateX(-4rem)"}`,
          }}
        ></button>
      </div>
    </section>
  );
};

export default Toggle