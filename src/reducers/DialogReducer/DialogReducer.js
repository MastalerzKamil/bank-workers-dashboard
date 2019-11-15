import * as actionTypes from 'constants/actionDialog';

const initialState = { openedDialog: false };

export default function(state=initialState, action) {
  switch(action.type) {
    case actionTypes.SHOW: {
      return {
        ...state,
        openedDialog: true,
      };
    }
    case actionTypes.HIDE: {
      return {
        ...state,
        openedDialog: false,
      }
    }
    default: {
      return state;
    }
  }
}