import React from 'react'
import { Badge, Col, Form, FormControl, Navbar, Row } from "react-bootstrap";
import NumberFormat from 'react-number-format';

const Header = ({ title, finalBalance, initialBalance, addInitialBalance }) => {

    const handleInitialBalance = (values) => {
        const { value } = values;
        addInitialBalance(value);
    };

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand className="font-weight-bold" href="#home">
                <img
                    alt=""
                    src="https://images.vexels.com/media/users/3/153797/isolated/preview/4c530aaa31fee46760a577666a13708d-icono-de-trazo-coloreado-de-billetes-de-dinero-by-vexels.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />
                <Form.Label className="text-white h3 px-3">{title}</Form.Label>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Form inline>
                    <Form.Group as={Row} className="px-5">
                        <Col sm="15">
                            <Form.Label className="text-white">Saldo Inicial</Form.Label>
                            <NumberFormat className="mr-sm-2 form-control form-control-sm" thousandSeparator={true} prefix={'$'}
                                value={initialBalance} onValueChange={handleInitialBalance} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm="15">
                            <Form.Label className="text-white">Saldo Final</Form.Label>
                            <NumberFormat className="mr-sm-2 form-control form-control-sm" thousandSeparator={true} prefix={'$'}
                                value={finalBalance} readOnly />
                        </Col>
                    </Form.Group>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
