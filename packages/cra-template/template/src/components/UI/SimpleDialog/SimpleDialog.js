// SimpleDialog
import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import Dialog from '@material-ui/core/Dialog/Dialog';



// props {
//     onClose,
//     selectedValue,
//     open,
//     title
// }
const SimpleDialog = (props) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => onClose(selectedValue);

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} p={2}>
      <DialogTitle id="simple-dialog-title">{props.title}</DialogTitle>
        {props.children}
    </Dialog>
  );
};

export default SimpleDialog;