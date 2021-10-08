import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './controlledForm.css'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Row'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
export function validacion(input){
    let errors ={}
  
    
    if (!input.email){
        errors.email= "el email es requerido"
    }else if(!/\S+@\S+\.\S+/.test(input.email)){
        errors.email= "el campo tiene que ser un email "
    }

    if (!input.asunto){
        errors.asunto= "el asunto es requerido"
    }else if(input.asunto.length<10){
        errors.asunto= "el asunto tiene que ser mayor  10 caracteres"
    }
    
    if (!input.mensaje){
        errors.mensaje= "el mensaje es requerido"
    }else if(input.mensaje.length>256 ){
        errors.mensaje= " el mensaje, debe contener como máximo 256 caracteres."
    }

    return errors;
}

export default function ControlledForm() {
    /* const [email ,setEmail] = useState('');
    const [asunto ,setAsunto] = useState('');
    const [mensaje ,setMensaje] = useState(''); */
    const [stateForm ,setStateForm] = useState({
        email:"",
        asunto:"",
        mensaje:"",
    })
    function onSubmitForm(e){
        //este prevente defaul es para que no se envien directamente por el metodo get 
        //cuando se aprete el boton
        e.preventDefault();
        alert(`
               el coreo es : ${stateForm.email}
               el asunto es : ${stateForm.asunto}
               el mensaje es : ${stateForm.mensaje}
        `)
    }
    const[error,setError] = useState({
        email: "el email es requerido",
        asunto: "el asunto es requerido",
        mensaje: "el mensaje es requerido",
    })
    

    function onHandleChange(e){
        setStateForm({
            ...stateForm,
            [e.target.name]:e.target.value,
            //otra forma de pasa un parametro 
        }) 

        setError(validacion(
            {
                ...stateForm,//me habia equivocado aqui jajajj
                [e.target.name]:e.target.value,
            })
            )
    }
    return (
        <>
            <Container className="Formformulario my-5">
                <Row>
  
                    <Col md={{ span: 2, offset: 2 }}>
                        <Form className="text-white my-4" onSubmit={(e)=>onSubmitForm(e)}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label >Email address</Form.Label>
                                <Form.Control 
                                            value={stateForm.email}
                                            type="email"
                                            name="email"
                                            placeholder="name@example.com" 
                                            onChange={(e)=>onHandleChange(e)}
                                            />
                                </Form.Group>
                                
                                {error.email && <p> {error.email} </p>}
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Asunto</Form.Label>
                                <Form.Control 
                                    value={stateForm.asunto} 
                                    type="text" 
                                    placeholder="asunto" 
                                    name="asunto"
                                    onChange={(e)=>onHandleChange(e)}
                                    />
                                 </Form.Group>
                                 {error.asunto && <p> {error.asunto} </p>}
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control 
                                    value={stateForm.mensaje} 
                                    as="textarea" 
                                    rows={3} 
                                    placeholder="Mensaje"
                                    name="mensaje"
                                    onChange={(e)=>onHandleChange(e)}
                                    />
                                </Form.Group>
                                {error.mensaje && <p> {error.mensaje} </p>}
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Form>
                    </Col>

                </Row>
            </Container>

        </>
    )
}


