import React, { Component, useState, useEffect } from 'react';
import Item from '../Item/Item';

import { Panel } from 'primereact/panel';
import 'primereact/resources/themes/nova-alt/theme.css';
import 'primereact/resources/primereact.min.css';

import List from '@material-ui/core/List';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import { ItemService } from '../../service/ItemService';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ItemList = props => {
  
  const itemService = new ItemService();
  const [item, setItem] = useState();
  const [items, setItems] = useState([]);

  const save = async () => {
    this.itemService.save(item).then(data => {})
      // this.itemService.getAll().then(data => this.setState({items: data}))
  }

  const classes = useStyles();

  

  const handleToggle = (value) => () => {
    console.log(value);
    };

  useEffect(() => {
    getItems();
  },[]);

  const getItems = async () => {
    const data = await itemService.getAll()
    setItems(data);
  }
  
      return (
        <Panel header="ToDo List">
          <h1 align="left">To-Do List</h1>
          <List className={classes.root}>
            {items.map((value) => {
              console.log(value)
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem key={value.id} role={undefined} dense button>
                  <Item
                    value={value.name}
                    labelId={value.id}
                    complete={value.complete}
                  />
                </ListItem>
                
                );
            })}
            
            <br/>
            <form id="item-input">
            <TextField id="outlined-basic" label="New Task" variant="outlined" value={item} onChange={e => setItem(e.target.value)} />
            <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={save}>add</Button>
            </form>
          </List>
        </Panel>
      );
  }

  export default ItemList;