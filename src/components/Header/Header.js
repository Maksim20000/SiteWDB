import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import logo from '../../assets/img/logo.png'
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

export let Header = () => {
    return(
        <div className={'justify-content-center'}>
            {/*collapseOnSelect - делает navBar адаптивным*/}
            {/*expand={} - брейк поинт при котором нав бар станет адаптивным*/}
            {/*bg - стильnavbar*/}
            {/*fixed={'top'} - делает что при скроле navBar не исчезает*/}
            <Navbar fixed={'top'} collapseOnSelect expand={'sm'} bg={'dark'} variant={'dark'}>
                <Container>
                    {/* В видио Navbar.brand*/}
                    <NavbarBrand >
                        <img src={logo}
                             alt="Logo"
                            height={'30'}
                             width={'30'}
                             className={'d-inline-block align-top'}
                        />
                    </NavbarBrand>
                    {/* сделаю с документации*/}
                    <NavbarToggle aria-controls="navbar-Supported-Content"/>

                    {/*В документации id="navbar-Supported-Content"*/}
                    <NavbarCollapse id="navbar-Supported-Content">
                        <Nav className={'mr-auto'}>
                            <NavLink src={'/'}>Home</NavLink>
                            <NavLink src={'/about'}>About us</NavLink>
                            <NavLink src={'/contacts'}>Contacts</NavLink>
                            <NavLink src={'/blog'}>Blog</NavLink>
                        </Nav>
                        <Form  role="search" inline className={`d-flex`}>
                            <FormControl
                                type="search" placeholder="Search" aria-label="Search"
                                className={'me-2'}
                            />
                            <Button variant={'outline-success'} className={'ms-lg-1'}>Search</Button>
                        </Form>
                    </NavbarCollapse>
                    </Container>
            </Navbar>
        </div>
    )
}