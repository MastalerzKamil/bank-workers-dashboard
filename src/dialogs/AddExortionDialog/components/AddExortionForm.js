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
  const { handleChangeTextField, state } = props
  const classes = useStyles();

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
        value={state.reason}
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
        value={state.authority}
      />
    </div>
  )
}

AddExortionForm.defaultProps = {
  applicationId: 0,
}

AddExortionForm.propTypes = {
  handleChangeTextField: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
}

export default AddExortionForm;