import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { connect } from 'react-redux';
import { filterInvoices } from '../redux/actions/invoiceAction';

class SearchBar extends Component {

    handleChange = e => {
        let { name, value} = e.target
        let filterObj = {
            filterPhrase: name === "filterPhrase" ? value : this.props.filterPhrase,
            type: name === "type" ? value : this.props.type
        }
        this.props.filterInvoices(filterObj)
    }

    render() {
        return (
            <div>
                <Form>
                    <Row>

                        <Col>
                            <FormGroup>
                                <Label for="search">Search</Label>
                                <Input
                                    onChange={this.handleChange}
                                    type={this.props.type === "name" ? "search" : "number"}
                                    min={this.props.type === "rating" ? 1 : null}
                                    max={this.props.type === "rating" ? 5 : null}
                                    name="filterPhrase"
                                    id="search"
                                    placeholder="search"
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label for="exampleSelect">Select</Label>
                                <Input onChange={this.handleChange} type="select" name="type" id="select" >
                                    <option value="invoiceNumber">Invoice No.</option>
                                    <option value="date"> Date</option>
                                    <option value="driver"> Driver</option>
                                    <option value="shipper"> Shipper</option>
                                    <option value="consignee"> Consignee</option>

                                </Input>
                            </FormGroup>
                        </Col>

                    </Row>
                </Form>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        type: state.invoices.type,
        filterPhrase: state.invoices.filterPhrase
    }
}

const maptDispatchToProps = dispatch => {
    return {
        filterInvoices: filterObj => {
            dispatch(
                filterInvoices(filterObj)
            )
        }
    }
}

export default connect(mapStateToProps, maptDispatchToProps) (SearchBar)