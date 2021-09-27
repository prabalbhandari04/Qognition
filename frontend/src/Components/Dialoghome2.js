import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import Reveal from 'react-reveal/Reveal/';
import { LoadingButton } from '@material-ui/lab';

import Sectitle from './Front/Sectitle';


const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
       <Sectitle sClass=" text-center " TitleP='Login | Qognition'/>
      <DialogTitle id="simple-dialog-title">Are you a patient or a doctor?</DialogTitle>
      <List>
      <ListItem>
           
           <LoadingButton
         fullWidth
         size="medium"
         style={{backgroundColor: "#e1d3f7", textDecoration:"none"}}
         href="/login"
        
       >
         Patient
       </LoadingButton>
       &nbsp; 
           <LoadingButton
         fullWidth
         size="medium"
         style={{backgroundColor: "#00c99c", textDecoration:"none", color:"white"}}
         href="/logindoctor"
       >
         Doctor
       </LoadingButton>
       
           <ListItemText/>
         </ListItem>

       
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function Dialoghome2() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Reveal effect="fadeInLeft" duration={1200}><div className="fadeInLeft" onClick={handleClickOpen}>Login</div></Reveal>
      {/* <Button style={{color: "white"}} onClick={handleClickOpen}>
        Dashboard
      </Button> */}
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}
