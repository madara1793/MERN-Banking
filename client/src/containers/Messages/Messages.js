import React, { Component } from 'react'
import styled from 'styled-components';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import { Card, CardBody, CardHeader, CardFooter, ListGroupItem, ListGroup } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { getMessages, addMessage } from '../../actions/messagesActions';
import PropTypes from 'prop-types';


class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            select: '',
            message: ''
        };
    }
  componentDidMount() {
    this.props.getMessages();
  }
  handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
        name: this.state.name,
        email: this.state.email,
        select: this.state.select,
        message: this.state.message
    }
    this.props.addMessage(newMessage);
    this.setState({
        name: '',
        email: '',
        select: '',
        message: ''
    })
  }
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value
    })
  }
  render() {
    const {messages} = this.props.message;
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
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="select"
                            name="select"
                            id="select"
                            value={this.state.select}
                            onChange={this.onChange}
                        >
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
                            value={this.state.message}
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <Button onClick={this.handleSubmit} color="primary">Send Message</Button>
                </Form>
                    </Col>
                    <Col md="6">
                    <ListGroup>
                        {messages.map(({name, id, email, select, message}) => (
                            <ListGroupItem key={id}>
                                <Card className="card">
                                    <CardHeader>
                                        {name}
                                    </CardHeader>
                                    <CardBody>
                                        <ul>
                                            <li>{message}</li>
                                            <li>{email}</li>
                                            <li>{select}</li>
                                        </ul>

                                    </CardBody>
                                    <CardFooter>
                                        2019/02/21
                                    </CardFooter>
                                </Card>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
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

Messages.propTypes = {
    getMessages: PropTypes.func.isRequired,
    addMessage: PropTypes.func.isRequired,
    message: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    message: state.messages
})

export default connect(mapStateToProps, {getMessages, addMessage})(Messages);