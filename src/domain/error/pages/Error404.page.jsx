//NotFoundPage.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center mt-5">
            <Row>
                <Col>
                    <h1 className="display-1 fw-bold text-primary">404</h1>
                    <h2 className="mb-3">Página no encontrada</h2>
                    <p className="text-muted mb-4">Lo sentimos, la página que estás buscando no existe.</p>
                    <Button variant="primary" onClick={() => navigate("/")}>Volver al inicio</Button>
                </Col>
            </Row>
        </Container>
    );
};
export default NotFoundPage;