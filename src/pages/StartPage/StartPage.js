import Styles from "./startPage.module.css";
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
                Weather forecast for thousands of cities around the world
              </h1>
              <form className={Styles.form_search}>
                <input
                  className={Styles.input_search}
                  placeholder="City"
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
            {weather ? (
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
                    <p>Temperature</p>
                    <p>{weather.current.temp_c} &deg;C</p>
                  </div>
                  <div className={Styles.content_modal_block}>
                    <p>Feels like</p>
                    <p>{weather.current.feelslike_c} &deg;C</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className={Styles.none_content}></div>
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
              Your #1 source for all weather forecasts and updates. Stay up to
              date with any weather changes with WindyWay.
            </motion.h1>
            <motion.p
              className={Styles.content_second_info_text}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.2, once: true }}
            >
              Avoid weather surprises. <br />
              <br /> WindyWay provides a travel planning tool with accurate
              weather forecast information to optimize travel plans. A
              successful trip requires careful planning so that travelers can
              enjoy a fun and safe journey.
              <br />
              <br />
              A trip planner with weather is an important tool to help with this
              planning. This tool provides up-to-date weather information for
              any given route. This allows travelers to make informed decisions
              about their travel plans at any given time. <br />
              <br /> You can get more information about today's weather by
              logging in to our website.
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
                name="London"
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
                name="Moscow"
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
