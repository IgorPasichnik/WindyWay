import Styles from "./card.module.css";

export const Card = ({
  name,
  iconPath,
  temp_c,
  feelslike_c,
  wind_kph,
  precip_mm,
  humidity,
  pressure_mb,
}) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.card_top}>
        <h1 className={Styles.city_name}>{name}</h1>
        <img className={Styles.img_icon} src={iconPath} alt="Weather Icon" />
      </div>
      <div className={Styles.card_bottom}>
        <div className={Styles.card_block}>
          <p>Температура</p>
          <p>
            <br />
            {temp_c} &deg;C
          </p>
        </div>
        <div className={Styles.card_block}>
          <p>Ощущается как</p>
          <p>
            <br />
            {feelslike_c} &deg;C
          </p>
        </div>
        <div className={Styles.card_block}>
          <p>Скорость ветра</p>
          <p>
            <br />
            {wind_kph} км/ч
          </p>
        </div>
        <div className={Styles.card_block}>
          <p>Осадки</p>
          <p>
            <br />
            {precip_mm} мм
          </p>
        </div>
        <div className={Styles.card_block}>
          <p>Влажность</p>
          <p>
            <br />
            {humidity}%
          </p>
        </div>
        <div className={Styles.card_block}>
          <p>Давление</p>
          <p>
            <br />
            {pressure_mb} мб
          </p>
        </div>
      </div>
    </div>
  );
};
