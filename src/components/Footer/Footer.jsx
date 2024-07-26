import Styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer_box}>
        <p>
          Данный сервис предоставляет информацию о погодных условиях. Вы можете
          получить данные о температуре воздуха, скорости ветра, осадках,
          влажности и давлении. Вся информация предоставляется исключительно в
          тестовых целях.
          <br />
          <br />
        </p>

        <p>Сервис предоставиший api: https://www.weatherapi.com</p>
      </div>
    </footer>
  );
};
