import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { ApplicationsTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const ApplicationsList = () => {
  const classes = useStyles();

  const [applicants] = useState(mockData);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <ApplicationsTable applicants={applicants} />
      </div>
    </div>
  );
};

export default ApplicationsList;