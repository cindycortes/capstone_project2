import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import InvoiceCreate from './invoices/InvoiceCreate';
import NewBusiness from './invoices/NewBusiness';
import NewDriver from './invoices/NewDriver';
import BusinessToggle from './toggle/BusinessToggle';
import DriversToggle from './toggle/DriversToggle';
import InvoiceToggle from './toggle/InvoiceToggle';
import Invoices from './Invoices';


export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
             Create Business/Driver
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
            className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
              
            >
            Create Invoice
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
             
            </NavLink>
            
          </NavItem>
        </Nav>
        
        
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <br/>
                <BusinessToggle />
                {/* <NewBusiness /> */}
                <br/>
                {/* <NewDriver /> */}
                <DriversToggle />
                
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <br/>
            <InvoiceToggle />
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <br/>
              {/* <Invoices /> */}
              {/* <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col> */}
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}