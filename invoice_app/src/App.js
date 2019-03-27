import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewInvoiceForm from './components/NewInvoiceForm';
import InvoiceCreate from './components/invoices/InvoiceCreate';
import SingleInvoice from './components/SingleInvoice';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/invoice/new" component={NewInvoiceForm} />
          <Route path="/invoice/:id" component={SingleInvoice} />
          </Switch>
        </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
