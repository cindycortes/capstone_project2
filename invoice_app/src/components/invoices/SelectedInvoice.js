import React, { Component } from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Row, Col
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectInvoice, editInvoice, editButton } from '../../redux/actions/invoiceAction';
import moment from 'moment';

class SelectedInvoice extends Component {


    render() {


        const { invoiceNumber, shipper, consignee, rate, charges, driverId, date, dateShipped, businessId, description_Commodity, shippersNumbers, weight_Quantity, id } = this.props.invoice
        // console.log("Invoice has been selected:", this.props.invoice)
        console.log("businessList from selected Invoice:", this.props.business)
        console.log("DriversList from selected Invoice:", this.props.drivers)


        console.log("props in edit Button", this.props)
        const invoiceDate = moment(date).format('MM-DD-YYYY')
        const shippedDate = moment(dateShipped).format('MM-DD-YYYY')
        // const driverName2 = driverName.name

        
        var driverName = this.props.drivers && driverId ? this.props.drivers.find(function (driverName) {
            return driverName.id === driverId
        }).name : ""

        var businessName = this.props.business && businessId ? this.props.business.find(function (businessName) {
            return businessName.id == businessId
        }).businessName : ""
        
        var businessAddress = this.props.business && businessId ? this.props.business.find(function (businessAddress) {
            return businessAddress.id == businessId
        }).businessAddress : ""



        // const driverFirstName = driverName["name"]
       
        // const driverName2 = Object.values(driverName)
     

        //     const drivName = driverName.find(function(dr) {
        //         return 
        //     })
        //     console.log(driverName)

        //    const driverResult = driverName

        // const driverName = this.props.drivers.find((driver) => {
        //     return driver.id === driverId
        // })
        // console.log("driverName", driverName)


        // const businessName = props.business.map((bus) => {
        //     return (
        //         <option key={bus.id} value={bus.id}>{bus.businessName}

        //         </option>
        //     )
        // })


        return (
            <div className="container">


                <Card body outline color="secondary">
                    <CardHeader tag="h3">Invoice No: {invoiceNumber} </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={6}>
                                <CardTitle tag="h4">Business:</CardTitle>
                                <CardText>{businessName}</CardText>
                                <CardText>{businessAddress}</CardText>
                                {/* <span>CC Trucking</span><br />
                                <span>123 ABC St. Phoenix, AZ 85041</span><br />
                                <span>123-123-1234</span> */}
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <Col md={6}>
                                        <CardText tag="h4"> Invoice No: </CardText>
                                    </Col>
                                    <Col md={6}>
                                        <CardText tag="h6">{invoiceNumber}</CardText>
                                    </Col>

                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <CardTitle tag="h4">Date:</CardTitle>
                                    </Col>
                                    <Col>

                                        <span>{invoiceDate}</span>
                                    </Col>

                                </Row>


                            </Col>
                        </Row>
                        <hr />

                        <Row>
                            <Col md={6}>
                                <Row>
                                    <Col>
                                        <CardTitle tag="h4">Driver: {driverName}  </CardTitle>

                                    </Col>
                                    <Col md={2}>
                                        <span></span>
                                    </Col>
                                </Row>
                            </Col>


                            <Col md={6}>
                                <Row>
                                    <Col md={6}>
                                        <CardTitle tag="h5">Shippers No: </CardTitle>

                                    </Col>
                                    <Col md={4}>
                                        <span>{shippersNumbers}</span>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                        <br />
                        <hr />
                        <Row>
                            <Col>
                                <CardTitle tag="h4">Shipper:</CardTitle>
                                <CardText>  {shipper} </CardText>

                                <CardTitle tag="h4">Consignee:</CardTitle>
                                <CardText>{consignee}</CardText>
                            </Col>
                        </Row>
                        <hr />
                        <br />
                        <Row>
                            <Col>
                                <CardTitle tag="h4">Weight: </CardTitle>
                                <CardText >{weight_Quantity}</CardText>
                            </Col>
                            <Col>
                                <CardTitle tag="h4">Rate:  </CardTitle>
                                <CardText>${rate}</CardText>

                            </Col>
                            <Col>
                                <CardTitle tag="h4">Charges: </CardTitle>
                                <CardText>${charges}</CardText>

                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <CardTitle tag="h4">Date Shipped:</CardTitle>
                                <CardText>{shippedDate}</CardText>

                                <CardTitle tag="h4"> Description: </CardTitle>
                                <CardText>{description_Commodity}</CardText>
                            </Col>
                        </Row>
                        <hr />
                    </CardBody>

                    <CardBody>
                        <Row>
                            <Col>
                                <Button onClick={() => this.props.history.push(`/invoice/${id}/edit`)}>Edit</Button>
                            </Col>
                            <Col>


                            </Col>
                        </Row>

                    </CardBody>
                    <CardFooter className="text-muted">CC Trucking Co.</CardFooter>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        invoice: state.invoices.invoiceSelected,
        business: state.businesses.businessList,
        drivers: state.drivers.driversList

    }
}

export default withRouter(connect(mapStateToProps, { selectInvoice, editInvoice, editButton })(SelectedInvoice))