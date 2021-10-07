import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Row'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
export default function ControlledForm() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="4"></Col>
                    <Col lg="2">
                        <Form  >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col lg="4"></Col>
                </Row>
            </Container>

        </>
    )
}


/* Correo electrónico || email.
Asunto.
Cuerpo || Mensaje.
botón de enviar (por el momento no hará nada).
 */

/* El formulario debe validar en todo momento:

    Que el correo electrónico sea valido (caracteres necesarios para cumplir con la condición de ser un email).
    Que el asunto contenga mínimo 10 caracteres.
    Que el cuerpo o mensaje, contenta máximo 256 caracteres.
    Que el botón de enviar, se encuentre inhabilitado, mientras alguna de las condiciones anteriores no se cumpla.
 */