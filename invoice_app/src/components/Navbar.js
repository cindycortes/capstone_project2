import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Link, Navlink } from 'react-router-dom';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavbarBrand href="/">CC Trucking</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Dashboard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/newinvoice">New Invoice</NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink href="/invoice/:id">Single Invoice</NavLink>
                            </NavItem> */}
                            <NavItem>
                                <NavLink href="https://github.com/cindycortes/capstone_project.git">GitHub</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}