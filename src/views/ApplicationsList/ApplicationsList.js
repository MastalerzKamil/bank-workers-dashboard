import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { ApplicationsToolbar } from 'containers'
import { ApplicationsTable } from './components';
import { fetchApplications } from 'hooks';

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

  const applicants = fetchApplications();

  console.log(applicants)
  return (
    <div className={classes.root}>
      <ApplicationsToolbar />
      <div className={classes.content}>
        <ApplicationsTable applicants={applicants} />
      </div>
    </div>
  );
};

export default ApplicationsList;