import { Form, Row, Col, Button, Container } from 'react-bootstrap'
 
function formComponent (){
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
                                    <Form.Control id="email" type="email"/> 
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <label>PASSWORD:</label>
                                    <br/>
                                    <Form.Control id="password" type="password" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className='home-title'
                                    type="button"
                                    size="lg"
                                    style={{backGroundColor:"red", borderColor:"black", textTransform:"uppercase"}}
                                >
                                    <label>Ingresar</label>
                                </Button>
                            </Col>
                        </Row>
                    </Container>

                </section>
            </Form>
        </div>
    )
}
export default formComponent