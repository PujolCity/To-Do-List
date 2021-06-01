
import React, { Component, useState, useEffect } from 'react';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';


//import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import Link from '@material-ui/core/Link';


const Item = ({value,labelId, complete}) => {
  const [checked, setChecked] = React.useState(complete);

  useEffect(() => {
    
  },[]);
  const eventchecked = () => {

    //llamar a api para guardar cambios
    console.log(value);
  }

  const eventEdit = () => {
    console.log("EDITAR");
  }
    return(
        <div>
        <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                      onChange={e => {
                        eventchecked();
                        setChecked(e.target.checked);}}
                    />
        </ListItemIcon>
        <ListItemText id={labelId} primary={value} />
        <Link component="button" variant="body2" onClick={() => { 
          eventEdit();
          }}> edit </Link>
          </div>
    );

}

export default Item;
