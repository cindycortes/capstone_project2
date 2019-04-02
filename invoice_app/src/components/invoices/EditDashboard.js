import React from 'react';
import EditTabs from '../../components/EditTabs';
import InvoiceCreate from './InvoiceCreate'
import { Row, Col } from 'reactstrap';

class EditDashboard extends React.Component {
    render() {
        return(
            <div>
                <Row>
                    <Col md={2}>
                       
                    </Col>
                    <Col md={8}>
                        
                        <br/>
                        <EditTabs />
                    </Col>
                    <Col md={2}>
                        {/* <InvoiceCreate /> */}
                    </Col>
                </Row>
                    
            </div>
        )
    }
}

export default EditDashboard