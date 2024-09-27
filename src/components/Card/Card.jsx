import { CardComponent } from "./cardStyles";

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
    <CardComponent>
      <header>
        <h1>{name}</h1>
        <img src={iconPath} alt="Weather Icon" />
      </header>
      <main>
        <article>
          <p>Temperature</p>
          <p>
            <br />
            {temp_c} &deg;C
          </p>
        </article>
        <article>
          <p>Feels like</p>
          <p>
            <br />
            {feelslike_c} &deg;C
          </p>
        </article>
        <article>
          <p>Wind speed</p>
          <p>
            <br />
            {wind_kph} km/h
          </p>
        </article>
        <article>
          <p>Precipitation</p>
          <p>
            <br />
            {precip_mm} mm
          </p>
        </article>
        <article>
          <p>Humidity</p>
          <p>
            <br />
            {humidity}%
          </p>
        </article>
        <article>
          <p>Pressure</p>
          <p>
            <br />
            {pressure_mb} mb
          </p>
        </article>
      </main>
    </CardComponent>
  );
};
