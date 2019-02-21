import React, { Component } from 'react'
import styled from 'styled-components';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export default class Messages extends Component {
  render() {
    return (
      <MessagesWrapper>
            <Container>
                <Row>
                    <Col md="6">
                    <Form>
                    <FormGroup>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Email"
                        />
                    </FormGroup>
                    <FormGroup>
                    <Input type="select" name="select" id="select">
                        <option>Subject 1</option>
                        <option>Subject 2</option>
                        <option>Subject 3</option>
                        <option>Subject 4</option>
                    </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="textarea"
                            name="message"
                            id="message"
                            placeholder="Message"
                        />
                    </FormGroup>
                    <Button color="primary">Send Message</Button>
                </Form>
                    </Col>
                    <Col md="6">
                            <Card className="card">
                                <CardHeader>
                                    Message 1
                                </CardHeader>
                                <CardBody>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus id pariatur autem quibusdam omnis quia dolores expedita iure similique vel.
                                </CardBody>
                                <CardFooter>
                                    2019/02/21
                                </CardFooter>
                            </Card>
                    </Col>
                </Row>
            </Container>
      </MessagesWrapper>
    )
  }
}

const MessagesWrapper = styled.div`
width: 100%;
.container {
    background-color: #27293d;
    border: 1px solid #000;
    width: 100%;
    padding: 2rem 1rem;
}
form {

}
#message {
    resize: none;
    height: 8rem;
}
`;