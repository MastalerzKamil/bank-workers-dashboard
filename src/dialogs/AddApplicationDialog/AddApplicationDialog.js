import React from 'react';
import {
  Dialog,
  DialogTitle,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import AddApplicationForm from './AddApplicationForm';
import { SentForm } from './components';

import { PropTypes } from 'prop-types';

const AddApplicationDialog = (props) => {
  const { actions, openedDialog } = props;
  const { hideDialog } = actions;

  const [state, setState] = React.useState({
    clientType: '',
    loanType: '',
    amount: '',
    firstName: '',
    lastName: '',
    homeStreet: '',
    homeCity: '',
    homePostalCode: '',
    mailingStreet: '',
    mailingCity: '',
    mailingPostalCode: '',
  });

  const [sendApplication, setSendApplication] = React.useState(false);
  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  const handleCloseSendForm = () => {
    setSendApplication(false);
  }

  const handleOpenSendForm = () => {
    setSendApplication(true);
    hideDialog();
  }

  if(sendApplication) {

    return (
      <SentForm
        handleClose={handleCloseSendForm}
        isSentApplication={sendApplication}
      />
    );
  }

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      onClose={() => hideDialog()}
      open={openedDialog}
    >
      <DialogTitle id="form-dialog-title">Składanie wniosku</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Formularz do składania wniosku
        </DialogContentText>
        <AddApplicationForm
          handleChange={handleChange}
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
          onClick={() => handleOpenSendForm()}
        >
        Dodaj
        </Button>
      </DialogActions>
    </Dialog>
  );
}

AddApplicationDialog.defaultProps = {
  openedDialog: false,
}

AddApplicationDialog.propTypes = {
  actions: PropTypes.shape({
    showDialog: PropTypes.func.isRequired,
    hideDialog: PropTypes.func.isRequired,
  }).isRequired,
  openedDialog: PropTypes.func.isRequired,
}

export default AddApplicationDialog;