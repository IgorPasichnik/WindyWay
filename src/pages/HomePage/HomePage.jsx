import img_search from "../../images/search.svg";
import img_sun from "../../images/weatherIcons/sun_weather_icon_152003.png";
import img_sunny from "../../images/weatherIcons/sunny_weather_icon_152004.png";
import img_cloud from "../../images/weatherIcons/cloud_weather_icon_151996.png";
import img_cloudy from "../../images/weatherIcons/cloudy_weather_icon_152005.png";
import img_rain from "../../images/weatherIcons/rain_weather_icon_151998.png";
import img_show from "../../images/weatherIcons/snow_weather_icon_152001.png";
import img_lightning from "../../images/weatherIcons/lightning_weather_icon_151999.png";
import img_rainbow from "../../images/weatherIcons/rainbow_weather_icon_152000.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchWeathers } from "../../app/services/api";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../components/Layout/Layout";
import { Card } from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../features/auth/authSlice";
import { Section } from "./homePageStyles";

export const HomePage = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLocationSubmit = (e) => {
    setWeather(null);

    if (location) {
      e.preventDefault();
      dispatch(fetchWeathers(location))
        .then((result) => {
          setWeather(result.payload);
        })
        .catch((error) => {
          console.error("Ошибка:", error);
        });
    } else {
      e.preventDefault();
      console.error("Location is not defined");
    }
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
        <Section>
          <div className="box">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.2, once: true }}
              className="search"
            >
              <h1 className="title">Please indicate the name of your city</h1>
              <form className="search_form">
                <input
                  className="search_input"
                  placeholder="City"
                  type="text"
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                ></input>
                <button className="search_btn" onClick={handleLocationSubmit}>
                  <img className="search_img" src={img_search} alt="search" />
                </button>
              </form>
            </motion.div>
            {weather ? (
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.5, once: true }}
              >
                <Card
                  name={weather.location.name}
                  iconPath={getIconPath(weather)}
                  temp_c={weather.current.temp_c}
                  feelslike_c={weather.current.feelslike_c}
                  wind_kph={weather.current.wind_kph}
                  precip_mm={weather.current.precip_mm}
                  humidity={weather.current.humidity}
                  pressure_mb={weather.current.pressure_mb}
                />
              </motion.div>
            ) : (
              <div className="none_content"></div>
            )}
          </div>
        </Section>
      </AnimatePresence>
    </Layout>
  );
};
