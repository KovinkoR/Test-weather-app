import React from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Weather({
  temp, pres, wind, data,
}) {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {t('date')}
            :
            {' '}
            {data}
          </Typography>
          <Typography variant="h5" component="h2">
            {t('temperature')}
            :
            {' '}
            {temp.toFixed()}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {t('wind speed')}
            :
            {' '}
            {wind}
            {' '}
            <br />
            {t('pressure')}
            :
            {' '}
            {pres}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Weather;
