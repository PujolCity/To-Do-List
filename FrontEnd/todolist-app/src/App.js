import './App.css';
import React, { Component } from 'react';
import { ItemService } from './service/ItemService';
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/components/column/Column';
import {Checkbox} from 'primereact/checkbox';
 
import 'primereact/resources/themes/nova-alt/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';



export default class App extends Component{
    constructor(){
      super();
      this.state = {
        item:{
        id: null,
        name: null,
        complete: false}
      };
      this.itemService = new ItemService();
      this.save = this.save.bind(this);
    }

    componentDidMount(){
      this.itemService.getAll().then(data => this.setState({items: data}))
    }
  
    save(){
      console.log(this.state.item);
      this.itemService.save(this.state.item).then(data => {
      })
      this.itemService.getAll().then(data => this.setState({items: data}))
      document.getElementById('item-imput').reset();
    }

    render(){
      return (
        <Panel header="ToDo List">
          <DataTable value={this.state.items}> 
            <Column field="name" header="Task"></Column>
          </DataTable>

          <br/>
          <br/>
          <form id="item-imput">
            <span className="p-float-label">
                <InputText  style={{width : '20%'}} id="name" onChange={(e) => {
                let val = e.target.value;
                this.setState(prevState =>{
                  let item = Object.assign({}, prevState.item);
                  item.name = val;
                  console.log(prevState);
                  return {item};
                })}
                } />    
                <label htmlFor="in">New Task</label>
            </span>
          </form>
          <br></br>
          <Button label="Add" onClick={this.save}></Button>
        </Panel>
      );
    }
  }