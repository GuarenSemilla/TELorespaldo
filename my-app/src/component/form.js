import { useState } from 'react' 
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
 
export default function FormComponent (){
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const showMessage = () => {
        alert(`El email ingresado es ${email} y su contraseña es ${password}`)
    }
    return(
        <div style={{marginTop:150}}>
            <Form>
                <section id="section">
                    <Container>
                        <Row>
                            <Col>
                                <h2> Ejemplo de Formulario Simple</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <label>E-MAIL:</label>
                                    <br />
                                    <Form.Control id="email" type="email" onChange={(component) => setEmail(component.target.value)}/> 
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <label>PASSWORD:</label>
                                    <br/>
                                    <Form.Control id="password" type="password" onChange={(component) => setPasword(component.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className='home-title'
                                    type="button"
                                    size="lg"
                                    onClick={showMessage}
                                    style={{backGroundColor:"red", borderColor:"black", textTransform:"uppercase"}}
                                >
                                    <label>Ingresar</label>
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label>{email}</label>
                                <label>{password}</label>
                            </Col>
                        </Row>
                    </Container>

                </section>
            </Form>
        </div>
    )
}
