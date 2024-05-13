import {Form,Row,Col,Button,Container} from 'react-bootstrap'
 
function formComponent (){
    return(
        <div>
            <Form>
                <section id="section">
                    <Container>
                        <Row>
                            <Col>
                                <h2>Ejemplo de Formulario Simple</h2>
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
                        </Row>
                    </Container>

                </section>
            </Form>
        </div>
    )
}
export default formComponent