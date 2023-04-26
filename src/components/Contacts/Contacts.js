import {Button, Container, Form} from "react-bootstrap";
export let Contacts = () => {
    debugger
    return(
        <div>
            <Container className={'w-50'}>
                <h1 className={'text-center'}>Contacts</h1>
                <Form className={'align-items-center'}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNum">
                        <Form.Label>Телефон</Form.Label>
                        <Form.Control type="tel" placeholder="Phone Number" />
                        <Form.Text className="text-muted">
                            We'll never share your telefon with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 align-items-cente" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 align-items-center" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"   label="Check me out" />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Registr
                    </Button>
                </Form>
            </Container>
        </div>
    )
}