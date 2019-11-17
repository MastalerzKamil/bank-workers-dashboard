import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { ExortionsTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const ExortionsList = () => {
  const classes = useStyles();

  const [exortions] = useState(mockData);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <ExortionsTable exortions={exortions} />
      </div>
    </div>
  );
};

export default ExortionsList;