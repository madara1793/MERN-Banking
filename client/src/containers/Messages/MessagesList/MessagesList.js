import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessages } from "../../../actions/messagesActions";
import PropTypes from "prop-types";
import { Accordion } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import styled from "styled-components";
import Loader from "../../../components/Loader/Loader";
import SingleMessage from "./../SingleMessage/SingleMessage";

class MessagesList extends Component {
  componentDidMount() {
    this.props.getMessages();
  }
  render() {
    const { messages } = this.props.message;
    if (!messages) {
      return <Loader />;
    } else {
      return (
        <AccordionWrapper>
          <Accordion atomic={true}>
            {messages.map(({ name, _id, email, select, message }) => (
              <SingleMessage
                key={_id}
                name={name}
                email={email}
                select={select}
                message={message}
              />
            ))}
          </Accordion>
          {/* Place for pagination*/}
        </AccordionWrapper>
      );
    }
  }
}

const AccordionWrapper = styled.div``;

MessagesList.propTypes = {
  getMessages: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  message: state.messages
});

export default connect(
  mapStateToProps,
  { getMessages }
)(MessagesList);
