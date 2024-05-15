import { useState } from 'react' 
import { Form, Row, Col, Button, Container } from 'react-bootstrap'

export default function Login (props){
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const showMessage = () => {
        alert(`Usuario registrado correctamente con el email: ${email} y contraseña ${password}`)
    }
    return(
        <div style={{marginTop:100,marginLeft:600}}>
            <header>
                <nav>
                    <h1> "Login" </h1>
                </nav>
            </header>
            <Form>
                <section id='section'>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <label>E-Mail:</label>
                                    <br />
                                    <Form.Control className='home-title' id="email" type='email' style={{background:'gray',border:'1px solid black'}} onChange={(component) => setEmail(component.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <label>PASSWORD:</label>
                                    <br />
                                    <Form.Control id="password" type="password" onChange={(component) => setPasword(component.target.value)}/> 
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button type="button"
                                size='lg'
                                onClick={showMessage}
                                style={{background:'green',borderBlockColor:'blue',textTransform:'uppercase'}}
                                >
                                Ingresar    
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Form>
        </div>
    )
}

