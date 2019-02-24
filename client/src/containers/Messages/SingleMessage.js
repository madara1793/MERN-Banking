import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getMessages } from '../../actions/messagesActions';
import PropTypes from 'prop-types';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import styled from 'styled-components';

class SingleMessage extends Component {
  componentDidMount() {
        this.props.getMessages();
  }
  render() {
      const { messages } = this.props.message;
    return (
      <AccordionWrapper>
          <Accordion atomic={true}>
            {messages.map(({name, _id, email, select, message}) => (
                <AccordionItem key={_id} title={name}>
                    <div className="card">
                        <div className="card-body">
                           <div className="email d-flex flex-row align-content-around">
                                <strong>Email: </strong>
                                <p className="ml-5">{email}</p>
                           </div>
                           <div className="email d-flex flex-row align-content-around">
                                <strong>Subject: </strong>
                                <p style={{marginLeft: '2rem'}}>{select}</p>
                           </div>
                           <div className="email d-flex flex-row align-content-around">
                                <strong>Message: </strong>
                                <p className="ml-4">{message}</p>
                           </div>
                        </div>
                    </div>
                </AccordionItem>
            ))}
           </Accordion>
      </AccordionWrapper>
    )
  }
}

const AccordionWrapper = styled.div`

`;

SingleMessage.propTypes = {
    getMessages: PropTypes.func.isRequired,
    transaction: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    message: state.messages
})

export default connect(mapStateToProps, {getMessages})(SingleMessage);