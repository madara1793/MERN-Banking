import React, { Component } from 'react'
import styled from 'styled-components';
import { Card, CardBody, CardHeader, CardFooter, ListGroupItem, ListGroup } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { getMessages, addMessage } from '../../actions/messagesActions';
import MessagesForm from './MessageForm';
import SingleMessage from './SingleMessage';
class Messages extends Component {
  render() {
    const {messages} = this.props.message;
    return (
      <MessagesWrapper>
            <Container>
                <Row>
                    <Col md="6">
                        <MessagesForm/>
                    </Col>
                    <Col md="6">
                    <ListGroup>
                        <SingleMessage/>
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
#message {
    resize: none;
    height: 8rem;
}
`;

const mapStateToProps = state => ({
    message: state.messages
})

export default connect(mapStateToProps, {getMessages, addMessage})(Messages);