import React from 'react';
import {
  Dialog,
  DialogTitle,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import { AddExortionForm } from './components';

import { PropTypes } from 'prop-types';

const AddExortionDialog = (props) => {
  const { actions, openedDialog, applicationId } = props;
  const { hideDialog } = actions;

  const [state, setState] = React.useState({
    reason: '',
    authority: '',
    applicationId,
  });

  const handleChangeTextField = stateName => event => {
    setState({
      ...state,
      [stateName]: event.target.value
    });
  };

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      onClose={() => hideDialog()}
      open={openedDialog}
    >
      <DialogTitle id="form-dialog-title">Zgłoszenie do organów ścigania</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Formularz do zgłoszenia wniosku na policję. Złóż go gdy wniosek podejrzany.
        </DialogContentText>
        <AddExortionForm
          handleChangeTextField={handleChangeTextField}
          state={state}
        />
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={() => hideDialog()}
        >
          Anuluj
        </Button>
        <Button
          color="primary"
          onClick={() => hideDialog()}
        >
          Zgłoś
        </Button>
      </DialogActions>
    </Dialog>
  );
}

AddExortionDialog.defaultProps = {
  openedDialog: false,
  applicationId: 0,
}

AddExortionDialog.propTypes = {
  actions: PropTypes.shape({
    showDialog: PropTypes.func.isRequired,
    hideDialog: PropTypes.func.isRequired,
  }).isRequired,
  applicationId: PropTypes.number,
  openedDialog: PropTypes.func.isRequired,
}

export default AddExortionDialog;