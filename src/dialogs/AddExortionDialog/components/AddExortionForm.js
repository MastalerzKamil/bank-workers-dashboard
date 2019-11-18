import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  input: {
    width: theme.spacing(25)
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const AddExortionForm = (props) => {
  const { applicationId } = props // TODO use in sendBody
  const classes = useStyles();
  const [state, setState] = React.useState({
    reason: '',
    organ: '',
  });

  const handleChangeTextField = stateName => event => {
    setState({
      ...state,
      [stateName]: event.target.value
    });
  };

  return (
    <div className={classes.container}>
      <TextField
        autoFocus
        className={classes.input}
        fullWidth
        id="reason"
        label="Powód"
        margin="dense"
        onChange={handleChangeTextField('reason')}
        type="text"
      />
      <TextField
        autoFocus
        className={classes.input}
        fullWidth
        id="organ"
        label="Organ"
        margin="dense"
        onChange={handleChangeTextField('organ')}
        type="text"
      />
    </div>
  )
}

AddExortionForm.defaultProps = {
  applicationId: 0,
}

AddExortionForm.propTypes = {
  applicationId: PropTypes.number
}

export default AddExortionForm;