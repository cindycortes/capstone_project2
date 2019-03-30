import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewInvoiceForm from './components/NewInvoiceForm';
import InvoiceCreate from './components/invoices/InvoiceCreate';
import SingleInvoice from './components/SingleInvoice';
import InvoiceEdit from './components/invoices/InvoiceEdit';
import Login from './components/auth/Login';
import CreateDashboard from './components/invoices/CreateDashboard'
// import Register from './components/auth/Register';
// import WizardForm from './components/invoiceWizard/WizardForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import WizardForm from './components/invoiceWizard/WizardForm';



class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" component={Dashboard} />
          {/* <Route path="/invoice/new" component={InvoiceCreate} /> */}
          <Route path="/invoice/new" component={CreateDashboard} />
          <Route path="/invoice/edit" component={InvoiceEdit} />
          <Route path="/login" component={Login} />
          <Route path="/wizard" component={WizardForm} />
          {/* <Route path="/register" component={Register} /> */}

          </Switch>
        </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
