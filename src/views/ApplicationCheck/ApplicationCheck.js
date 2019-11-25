import React from 'react';
import {
  TextField,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import { AddExortionDialog } from 'containers';
import { FetchSingleApplication } from 'hooks';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  buttonsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: theme.spacing(10)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(20),
    width: 200
  }
}));

const ApplicationCheck = props => {
  const { match, openedDialog, actions } = props;
  const { id } = match.params;
  const classes = useStyles();

  const fetchedData = FetchSingleApplication({ applicationId: id });

  return (
    <div>
      <form
        autoComplete="off"
        className={classes.container}
        noValidate
      >
        <div>
          <TextField
            className={classes.textField}
            id="standard-read-only-input"
            InputProps={{
              readOnly: true
            }}
            label="Typ klienta"
            margin="normal"
            value={fetchedData.clientType}
          />
          <TextField
            className={classes.textField}
            id="standard-read-only-input"
            InputProps={{
              readOnly: true
            }}
            label="Imię"
            margin="normal"
            value={fetchedData.firstName}
          />
          <TextField
            className={classes.textField}
            id="standard-read-only-input"
            InputProps={{
              readOnly: true
            }}
            label="Nazwisko"
            margin="normal"
            value={fetchedData.lastName}
          />
          <TextField
            className={classes.textField}
            id="standard-read-only-input"
            InputProps={{
              readOnly: true
            }}
            label="Kwota"
            margin="normal"
            value={`${fetchedData.amount}zł`}
          />
          <TextField
            className={classes.textField}
            id="standard-read-only-input"
            InputProps={{
              readOnly: true
            }}
            label="Adres zamieszkania"
            margin="normal"
            value={`${fetchedData.homeStreet}, ${fetchedData.homeCity}, ${fetchedData.homePostalCode}`}
          />
          <TextField
            className={classes.textField}
            id="standard-read-only-input"
            InputProps={{
              readOnly: true
            }}
            label="Adres zameldowania"
            margin="normal"
            value={`${fetchedData.mailingStreet}, ${fetchedData.mailingCity}, ${fetchedData.mailingPostalCode}`}
          />
        </div>
        <div className={classes.buttonsContainer}>
          <Button
            color="primary"
            variant="contained"
          >
            Pozytywny
          </Button>
          <Button
            color="primary"
            variant="contained"
          >
            Negatywny
          </Button>
          <Button
            color="secondary"
            onClick={() => actions.showDialog()}
            variant="contained"
          >
            Zgłoś
          </Button>
        </div>
      </form>
      <AddExortionDialog applicationId={id}/>
    </div>
  );
}

ApplicationCheck.defaultProps = {
  openedDialog: false,
}

ApplicationCheck.propTypes = {
  actions: PropTypes.shape({
    showDialog: PropTypes.func.isRequired,
    hideDialog: PropTypes.func.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
  openedDialog: PropTypes.bool,
}

export default ApplicationCheck;
