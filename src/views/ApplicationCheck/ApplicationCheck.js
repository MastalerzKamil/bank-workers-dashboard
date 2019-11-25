import React from 'react';
import {
  TextField,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import { AddExortionDialog } from 'containers';
import mockData from './data';

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
            value={mockData.clientType}
          />
          <TextField
            className={classes.textField}
            id="standard-read-only-input"
            InputProps={{
              readOnly: true
            }}
            label="Imię"
            margin="normal"
            value={mockData.firstName}
          />
          <TextField
            className={classes.textField}
            id="standard-read-only-input"
            InputProps={{
              readOnly: true
            }}
            label="Nazwisko"
            margin="normal"
            value={mockData.lastName}
          />
          <TextField
            className={classes.textField}
            id="standard-read-only-input"
            InputProps={{
              readOnly: true
            }}
            label="Kwota"
            margin="normal"
            value={`${mockData.amount.toString()}zł`}
          />
          <TextField
            className={classes.textField}
            id="standard-read-only-input"
            InputProps={{
              readOnly: true
            }}
            label="Adres zamieszkania"
            margin="normal"
            value={`${mockData.homeStreet}, ${mockData.homeCity}, ${mockData.homePostalCode}`}
          />
          <TextField
            className={classes.textField}
            defaultValue="Gdańsk, ul. Wałowa 123/4, 80-123"
            id="standard-read-only-input"
            InputProps={{
              readOnly: true
            }}
            label="Adres zameldowania"
            margin="normal"
            value={`${mockData.mailingStreet}, ${mockData.mailingCity}, ${mockData.mailingPostalCode}`}
          />
          <TextField
            className={classes.textField}
            id="standard-read-only-input"
            InputProps={{
              readOnly: true
            }}
            label="PESEL"
            margin="normal"
            value={mockData.pesel}
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
      <AddExortionDialog />
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
