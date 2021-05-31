import './App.css';
import React, { Component } from 'react';
import { ItemService } from './service/ItemService';
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/components/column/Column';
 
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
        selectedItem : null,
        item:{
        id: null,
        name: null,
        complete: false},
      };
      this.itemService = new ItemService();
      this.save = this.save.bind(this);
      this.onRowSelect = this.onRowSelect.bind(this);
      this.onRowUnselect = this.onRowUnselect.bind(this);

      
    }
    

    onRowSelect(event) {
      this.toast.show({ severity: 'info', summary: 'Product Selected', detail: `Name: ${event.data.name}`, life: 3000 });
  }

  onRowUnselect(event) {
      this.toast.show({ severity: 'warn', summary: 'Product Unselected', detail: `Name: ${event.data.name}`, life: 3000 });
  }
    componentDidMount(){
      this.itemService.getAll().then(data => this.setState({items: data}))
    }
  
    save(){
      console.log(this.state.item);
      this.itemService.save(this.state.item).then(data => {
      })
      this.itemService.getAll().then(data => this.setState({items: data}))
    }

    editProduct(product) {
      this.setState({
          product: { ...product },
          productDialog: true
      });
  }
    actionBodyTemplate(rowData) {
      return (
          <React.Fragment>
              <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => this.editProduct(rowData)} />
          </React.Fragment>
      );
  }
    render(){
      return (
        <Panel header="ToDo List">
                    <DataTable value={this.state.items} selectionMode="checkbox" selection={this.state.selectedItem} onSelectionChange={(e) => this.setState({ selectedItem: e.value })} dataKey="id">                      
                      <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
                      <Column field="name" header="Task"></Column>
                      <Column body={this.actionBodyTemplate}></Column>
                    </DataTable>
          <br/>
          <br/>
          <form id="item-imput">
            <span className="p-float-label">
                <InputText id="name" onChange={(e) => {
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