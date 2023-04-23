import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavItem, NavLink as BootstrapNavLink} from "react-bootstrap";
import logo from '../../assets/img/ReactIcon2.png'
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import React from "react";


export let Header = () => {
    return (
        <div>
            {/* fixed={'top'} - фиксирует */}
            <Navbar className="navbar-expand-lg bg-body-tertiary"  collapseOnSelect expand={'md'} bg={'dark'} variant={'dark'}>
                <Container>
                    <NavbarBrand>
                        <img src={logo}
                             alt="Logo"
                             className={'d-inline-block align-top'}
                             height={50}
                        />
                    </NavbarBrand>
                        <NavbarToggle type="button" data-bs-toggle="collapse"
                                      data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
                                      aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </NavbarToggle>
                        <NavbarCollapse id="navbarTogglerDemo03">
                            <Nav className="me-auto mb-2 mb-lg-0">
                                <NavItem>
                                        <BootstrapNavLink className=" active" aria-current="page" href={'/'}>Home</BootstrapNavLink>
                                </NavItem>
                                <NavItem>
                                    <BootstrapNavLink className=" active" aria-current="page" href={'/about'}>About us </BootstrapNavLink>

                                </NavItem>
                                <NavItem>
                                    <BootstrapNavLink className=" active" aria-current="page" href={"/contacts"}>Contacts</BootstrapNavLink>
                                </NavItem>
                                <NavItem>
                                    <BootstrapNavLink className=" active" aria-current="page" href={"/blog"}>Blog</BootstrapNavLink>
                                </NavItem>
                            </Nav>
                            <Form className="d-flex" role="search">
                                <FormControl className="me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <Button variant="outline-success" type="submit">Search</Button>
                            </Form>
                        </NavbarCollapse>
                </Container>
            </Navbar>
        </div>
        )
}