import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { connect } from "react-redux";
import { getMessages, addMessage } from "../../../actions/messagesActions";
import PropTypes from "prop-types";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      select: "",
      message: ""
    };
  }
  componentDidMount() {
    this.props.getMessages();
  }
  handleSubmit = e => {
    e.preventDefault();

    const newMessage = {
      name: this.state.name,
      email: this.state.email,
      select: this.state.select,
      message: this.state.message
    };
    this.props.addMessage(newMessage);
    this.setState({
      name: "",
      email: "",
      select: "",
      message: ""
    });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
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
              style={{ resize: "none", height: "8rem" }}
              type="textarea"
              name="message"
              id="message"
              placeholder="Message"
              value={this.state.message}
              onChange={this.onChange}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit} color="primary">
            Send Message
          </Button>
        </Form>
      </div>
    );
  }
}

MessageForm.propTypes = {
  getMessages: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  message: state.messages
});

export default connect(
  mapStateToProps,
  { getMessages, addMessage }
)(MessageForm);
