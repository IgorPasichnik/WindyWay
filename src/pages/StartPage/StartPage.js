import Styles from "./startPage.module.css";
// import img_real_weather from "../../images/weatherIcons/rainbow_weather_icon_152000.png";
import img_icon1 from "../../images/weatherIcons/rain_weather_icon_151998.png";
import img_icon2 from "../../images/weatherIcons/sunny_weather_icon_152004.png";
import img_search from "../../images/search.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchWeathers } from "../../app/services/api";
import { useDispatch } from "react-redux";
import { Layout } from "../../components/Layout/Layout";
import { Card } from "../../components/Card/Card";

export const StartPage = () => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(null);

  const handlerLocation = (e) => {
    setWeather(null);

    if (location) {
      e.preventDefault();
      document.activeElement.blur();
      dispatch(fetchWeathers(location))
        .then((result) => {
          setWeather(result.payload);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    } else {
      e.preventDefault();
      console.error("Location is not defined");
    }
  };

  return (
    <Layout>
      <AnimatePresence>
        <section className={Styles.content}>
          <div className={Styles.content_box}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.2, once: true }}
              className={Styles.content_search}
            >
              <h1 className={Styles.content_title}>
                Прогноз погоды для тысячи городов по всему миру
              </h1>
              <form className={Styles.form_search}>
                <input
                  className={Styles.input_search}
                  placeholder="Город"
                  type="text"
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <button className={Styles.btn_search} onClick={handlerLocation}>
                  <img
                    className={Styles.image_search}
                    src={img_search}
                    alt="search"
                  />
                </button>
              </form>
            </motion.div>
            {weather && (
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.5, once: true }}
                className={Styles.content_modal}
              >
                <div className={Styles.content_modal_top}>
                  <h1>{weather.location.name}</h1>
                </div>
                <div className={Styles.content_modal_bottom}>
                  <div className={Styles.content_modal_block}>
                    <p>Температура</p>
                    <p>{weather.current.temp_c} &deg;C</p>
                  </div>
                  <div className={Styles.content_modal_block}>
                    <p>Ощущается как</p>
                    <p>{weather.current.feelslike_c} &deg;C</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
        <section className={Styles.content_second}>
          <div className={Styles.content_second_info}>
            <motion.h1
              className={Styles.content_second_info_title}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.2, once: true }}
            >
              Ваш источник №1 любых прогнозов погоды и обновлений. Будьте в
              курсе любых изменений погоды с WindyWay.
            </motion.h1>
            <motion.p
              className={Styles.content_second_info_text}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.2, once: true }}
            >
              Избегайте погодных сюрпризов <br />
              <br /> WindyWay предоставляет инструмент планирования поездок с
              точной информацией о прогнозе погоды для оптимизации планов
              поездок. Успешное путешествие требует тщательного планирования,
              чтобы путешественники могли насладиться веселым и безопасным
              путешествием.
              <br />
              <br />
              Планировщик поездки с погодой — важный инструмент, помогающий в
              этом планировании. Этот инструмент предоставляет актуальную
              информацию о погоде для любого заданного маршрута. Это позволяет
              путешественникам принимать обоснованные решения о своих планах
              поездок в любой момент времени. <br />
              <br /> Больше информации о погоде на сегодня, Вы сможете получить
              авторизовавшись на нашем сайте.
            </motion.p>
          </div>
          <div className={Styles.content_second_cards}>
            <motion.div
              key="london"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.2, once: true }}
            >
              <Card
                name="Лондон"
                iconPath={img_icon1}
                temp_c="4"
                feelslike_c="2"
                wind_kph="9"
                precip_mm="2"
                humidity="82"
                pressure_mb="1088"
              />
            </motion.div>
            <motion.div
              key="moscow"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.2, once: true }}
            >
              <Card
                name="Москва"
                iconPath={img_icon2}
                temp_c="11"
                feelslike_c="7"
                wind_kph="3"
                precip_mm="0"
                humidity="66"
                pressure_mb="1024"
              />
            </motion.div>
          </div>
        </section>
      </AnimatePresence>
    </Layout>
  );
};
