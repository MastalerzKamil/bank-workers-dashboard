import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  FormControl,
  InputLabel,
  Select
} from '@material-ui/core';
import { PropTypes } from 'prop-types';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));


const AddApplicationForm = (props) => {
  const classes = useStyles();

  const { state, handleChange} = props;

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return(
    <div>
      <FormControl
        className={classes.formControl}
        variant="outlined"
      >
        <InputLabel
          htmlFor="outlined-age-native-simple"
          ref={inputLabel}
        >
          Rodzaj Klienta
        </InputLabel>
        <Select
          inputProps={{
            name: 'clientType',
            id: 'outlined-age-native-simple'
          }}
          labelWidth={labelWidth}
          native
          onChange={handleChange('clientType')}
          value={state.clientType}
        >
          <option value="" />
          <option value={'person'}>Klient Indywidualny</option>
          <option value={'company'}>Firma</option>
        </Select>
      </FormControl>
      <FormControl
        className={classes.formControl}
        variant="outlined"
      >
        <InputLabel
          htmlFor="outlined-age-native-simple"
          ref={inputLabel}
        >
          Rodzaj kredytu
        </InputLabel>
        <Select
          inputProps={{
            name: 'loanType',
            id: 'outlined-age-native-simple'
          }}
          labelWidth={labelWidth}
          native
          onChange={handleChange('loanType')}
          value={state.loanType}
        >
          <option value="" />
          <option value={'studentLoan'}>Studencki</option>
          <option value={'flatLoan'}>Hipoteczny</option>
        </Select>
      </FormControl>
      <TextField
        autoFocus
        fullWidth
        id="amount"
        label="Kwota"
        margin="dense"
        type="number"
      />
      <TextField
        autoFocus
        fullWidth
        id="firstName"
        label="Imię"
        margin="dense"
        type="text"
      />
      <TextField
        autoFocus
        fullWidth
        id="lastName"
        label="Nazwisko"
        margin="dense"
        type="text"
      />
      <TextField
        autoFocus
        fullWidth
        id="pesel"
        label="PESEL"
        margin="dense"
        type="text"
      />
      <div>Miejsce zamieszkania</div>
      <TextField
        autoFocus
        fullWidth
        id="homeStreet"
        label="ulica"
        margin="dense"
        type="text"
      />
      <TextField
        autoFocus
        fullWidth
        id="homeCity"
        label="miasto"
        margin="dense"
        type="text"
      />
      <TextField
        autoFocus
        fullWidth
        id="homePostalCode"
        label="kod pocztowy"
        margin="dense"
        type="text"
      />
      <div>Miejsce zameldowania</div>
      <TextField
        autoFocus
        fullWidth
        id="mailingStreet"
        label="ulica"
        margin="dense"
        type="text"
      />
      <TextField
        autoFocus
        fullWidth
        id="mailingCity"
        label="miasto"
        margin="dense"
        type="text"
      />
      <TextField
        autoFocus
        fullWidth
        id="mailingPostalCode"
        label="kod pocztowy"
        margin="dense"
        type="text"
      />
    </div>
  );
}

AddApplicationForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
}

export default AddApplicationForm;