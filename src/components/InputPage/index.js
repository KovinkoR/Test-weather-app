import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { startWeather } from '../../redux/actions';

import OneDay from '../OneDay';

function InputPage() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const { t } = useTranslation();
  const cityList = [
    { title: t('cityList.title1') },
    { title: t('cityList.title2') },
    { title: t('cityList.title3') },
    { title: t('cityList.title4') },
    { title: t('cityList.title5') },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line max-len
    const inputValue = e.target.firstElementChild.firstElementChild.lastElementChild.firstElementChild.value;
    if (JSON.stringify(cityList).includes(inputValue)) {
      dispatch(startWeather(inputValue));
    } else {
      alert(t('alert'));
    }
  };

  return (
    <>
      <div style={{ margin: 10 }}>
        <form onSubmit={handleSubmit}>
          <Autocomplete
            id="combo-box-demo"
            options={cityList}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label={t('question')} variant="outlined" />}
          />
        </form>
      </div>
      {
        weather
          ? <OneDay title={weather.weather[0].name} />
          : null
      }
    </>
  );
}

export default InputPage;
