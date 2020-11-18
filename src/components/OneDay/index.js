import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Weather from '../Weather';

function OneDay({ title }) {
  const { t } = useTranslation();
  const weather = useSelector((state) => state.weather);
  const slicedWeather = weather.weather.slice(1);
  return (
    <>
      <h2>
        {t('city')}
        : &nbsp;
        {title}
      </h2>
      {
        slicedWeather.map((el) => (
          <Weather
            key={el.dt_txt}
            temp={el.main.temp}
            pres={el.main.pressure}
            wind={el.wind.speed}
            data={el.dt_txt}
          />
        ))
      }
    </>
  );
}

export default OneDay;
