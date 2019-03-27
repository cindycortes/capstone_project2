import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewInvoiceForm from './components/NewInvoiceForm';
import InvoiceCreate from './components/invoices/InvoiceCreate';
import SingleInvoice from './components/SingleInvoice';
import InvoiceEdit from './components/invoices/InvoiceEdit';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/invoice/new" component={InvoiceCreate} />
          <Route path="/invoice/edit" component={InvoiceEdit} />
          </Switch>
        </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
