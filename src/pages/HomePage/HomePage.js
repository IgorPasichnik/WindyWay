import Styles from "./homePage.module.css";
import img_search from "../../images/search.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchWeathers } from "../../store/weatherSlice";
import { useDispatch } from "react-redux";
import img_sun from "../../images/weatherIcons/sun_weather_icon_152003.png";
import img_sunny from "../../images/weatherIcons/sunny_weather_icon_152004.png";
import img_cloud from "../../images/weatherIcons/cloud_weather_icon_151996.png";
import img_cloudy from "../../images/weatherIcons/cloudy_weather_icon_152005.png";
import img_rain from "../../images/weatherIcons/rain_weather_icon_151998.png";
import img_show from "../../images/weatherIcons/snow_weather_icon_152001.png";
import img_lightning from "../../images/weatherIcons/lightning_weather_icon_151999.png";
import img_rainbow from "../../images/weatherIcons/rainbow_weather_icon_152000.png";
import { Layout } from "../../components/Layout/Layout";

export const HomePage = () => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(null);

  const handleLocationSubmit = (e) => {
    setWeather(null);
    e.preventDefault();
    dispatch(fetchWeathers(location))
      .then((result) => {
        setWeather(result.payload);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  const getIconPath = (weather) => {
    let iconPath = "";
    switch (weather.current.condition.code) {
      case 1000:
        iconPath = img_sun;
        break;
      case 1003:
        iconPath = img_sunny;
        break;
      case 1006:
        iconPath = img_cloud;
        break;
      case 1009:
      case 1030:
      case 1135:
      case 1147:
        iconPath = img_cloudy;
        break;
      case 1063:
      case 1072:
      case 1150:
      case 1153:
      case 1168:
      case 1171:
      case 1180:
      case 1183:
      case 1186:
      case 1189:
      case 1192:
      case 1195:
      case 1198:
      case 1201:
      case 1240:
      case 1243:
      case 1246:
      case 1249:
      case 1252:
      case 1261:
      case 1264:
      case 1273:
      case 1276:
        iconPath = img_rain;
        break;
      case 1066:
      case 1069:
      case 1114:
      case 1117:
      case 1204:
      case 1207:
      case 1210:
      case 1213:
      case 1216:
      case 1219:
      case 1222:
      case 1225:
      case 1237:
      case 1255:
      case 1258:
      case 1279:
      case 1282:
        iconPath = img_show;
        break;
      case 1087:
        iconPath = img_lightning;
        break;
      default:
        iconPath = img_rainbow;
    }
    return iconPath;
  };

  return (
    <Layout>
      <AnimatePresence>
        <section className={Styles.content}>
          <div className={Styles.content_box}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className={Styles.content_search}
            >
              <h1 className={Styles.content_title}>
                Укажите название Вашего города
              </h1>
              <form className={Styles.form_search_location}>
                <input
                  className={Styles.input_search}
                  placeholder="Город"
                  type="text"
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                ></input>
                <button
                  className={Styles.btn_search}
                  onClick={handleLocationSubmit}
                >
                  <img className={Styles.image_search} src={img_search} />
                </button>
              </form>
            </motion.div>
            {weather && (
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className={Styles.content_second_container}
              >
                <div className={Styles.content_second_container_up}>
                  <h1>{weather.location.name}</h1>
                  <img className={Styles.img_icon} src={getIconPath(weather)} />
                </div>
                <div className={Styles.content_second_container_bottom}>
                  <div className={Styles.container_block}>
                    <p>Температура</p>
                    <p>
                      <br />
                      {weather.current.temp_c} &deg;C
                    </p>
                  </div>
                  <div className={Styles.container_block}>
                    <p>Ощущается как</p>
                    <p>
                      <br />
                      {weather.current.feelslike_c} &deg;C
                    </p>
                  </div>
                  <div className={Styles.container_block}>
                    <p>Скорость ветра</p>
                    <p>
                      <br />
                      {weather.current.wind_kph} км/ч
                    </p>
                  </div>
                  <div className={Styles.container_block}>
                    <p>Осадки</p>
                    <p>
                      <br />
                      {weather.current.precip_mm} мм
                    </p>
                  </div>
                  <div className={Styles.container_block}>
                    <p>Влажность</p>
                    <p>
                      <br />
                      {weather.current.humidity}%
                    </p>
                  </div>
                  <div className={Styles.container_block}>
                    <p>Давление</p>
                    <p>
                      <br />
                      {weather.current.pressure_mb} мб
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </AnimatePresence>
    </Layout>
  );
};
