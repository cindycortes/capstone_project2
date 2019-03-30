import React from 'react';
import Tabs from '../../components/Tabs';
import InvoiceCreate from './InvoiceCreate'
import { Row, Col } from 'reactstrap';

class CreateDashboard extends React.Component {
    render() {
        return(
            <div>
                <Row>
                    <Col md={2}>
                        {/* <Tabs /> */}
                    </Col>
                    <Col md={8}>
                        {/* <h2> </h2> */}
                        <br/>
                        <Tabs />
                    </Col>
                    <Col md={2}>
                        {/* <InvoiceCreate /> */}
                    </Col>
                </Row>
                    
            </div>
        )
    }
}

export default CreateDashboard