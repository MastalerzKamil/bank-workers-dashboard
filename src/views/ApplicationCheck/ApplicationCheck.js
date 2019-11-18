import React from 'react';
import {
  TextField,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';

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
  const { match} = props;
  const { id } = match.params;
  const classes = useStyles();

  return (
    <form
      autoComplete="off"
      className={classes.container}
      noValidate
    >
      <div>
        <TextField
          className={classes.textField}
          defaultValue="Klient indywidualny"
          id="standard-read-only-input"
          InputProps={{
            readOnly: true
          }}
          label="Typ klienta"
          margin="normal"
        />
        <TextField
          className={classes.textField}
          defaultValue="Bernard"
          id="standard-read-only-input"
          InputProps={{
            readOnly: true
          }}
          label="Imię"
          margin="normal"
        />
        <TextField
          className={classes.textField}
          defaultValue="Campton"
          id="standard-read-only-input"
          InputProps={{
            readOnly: true
          }}
          label="Nazwisko"
          margin="normal"
        />
        <TextField
          className={classes.textField}
          defaultValue="50000zł"
          id="standard-read-only-input"
          InputProps={{
            readOnly: true
          }}
          label="Kwota"
          margin="normal"
        />
        <TextField
          className={classes.textField}
          defaultValue="Gdańsk, ul. Wałowa 123/4, 80-123"
          id="standard-read-only-input"
          InputProps={{
            readOnly: true
          }}
          label="Adres zamieszkania"
          margin="normal"
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
        />
        <TextField
          className={classes.textField}
          defaultValue="12345678901"
          id="standard-read-only-input"
          InputProps={{
            readOnly: true
          }}
          label="PESEL"
          margin="normal"
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
          variant="contained"
        >
          Zgłoś
        </Button>
      </div>
    </form>
  );
}

ApplicationCheck.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
}

export default ApplicationCheck;
