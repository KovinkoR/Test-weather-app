import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function Navigation() {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab component={Link} to="/" label={t('menuWeather')} />
          <Tab component={Link} to="/history" label={t('menuHistory')} />
        </Tabs>
      </Paper>
      <button type="button" onClick={() => changeLanguage('ru')}>{t('langRu')}</button>
      <button type="button" onClick={() => changeLanguage('en')}>{t('langEng')}</button>
      <hr />
    </>
  );
}

export default Navigation;
