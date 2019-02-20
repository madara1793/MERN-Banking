import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Fade } from 'reactstrap';
import PropTypes from 'prop-types';
import {Form, FormGroup, Label, Input } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  onHandleSubmit = e => {
     e.preventDefault();
  }
  render() {
    return (
      <div>
        <Button className="mb-3" color="primary" size="lg" onClick={this.toggle}>New Transfer</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>New Transfer</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.onHandleSubmit}>
        <FormGroup>
          <Label for="accountnumber">Recipient's account number</Label>
          <Input type="number" name="accountnumber" id="accountnumber" placeholder="Recipient's account number" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Recipient's name</Label>
          <Input type="text" name="name" id="name" placeholder="Recipient's name" />
        </FormGroup>
        <FormGroup>
          <Label for="address">Recipient's address</Label>
          <Input type="textarea" name="address" id="address" placeholder="Recipient's address" />
        </FormGroup>
        <FormGroup>
          <Label for="reference">Reference</Label>
          <Input type="text" name="reference" id="reference" placeholder="Reference..." />
        </FormGroup>
        <FormGroup>
          <Label for="amount">Amount</Label>
          <Input type="number" name="amount" id="amount" placeholder="Amount..." />
        </FormGroup>
      </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Confirm Transfer</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

Modal.propTypes = {
    // boolean to control the state of the popover
    isOpen:  PropTypes.bool,
    autoFocus: PropTypes.bool,
    // if modal should be centered vertically in viewport
    centered: PropTypes.bool,
    // corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
    size: PropTypes.string,
    // callback for toggling isOpen in the controlling component
    toggle:  PropTypes.func,
    role: PropTypes.string, // defaults to "dialog"
    // used to reference the ID of the title element in the modal
    labelledBy: PropTypes.string,
    keyboard: PropTypes.bool,
    // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['static'])
    ]),
    // allows for a node/component to exist next to the modal (outside of it). Useful for external close buttons
    // external: PropTypes.node,
    // called on componentDidMount
    onEnter: PropTypes.func,
    // called on componentWillUnmount
    onExit: PropTypes.func,
    // called when done transitioning in
    onOpened: PropTypes.func,
    // called when done transitioning out
    onClosed: PropTypes.func,
    className: PropTypes.string,
    wrapClassName: PropTypes.string,
    modalClassName: PropTypes.string,
    backdropClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    // boolean to control whether the fade transition occurs (default: true)
    fade: PropTypes.bool,
    cssModule: PropTypes.object,
    // zIndex defaults to 1000.
    zIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    // backdropTransition - controls backdrop transition
    // timeout is 150ms by default to match bootstrap
    // see Fade for more details
    backdropTransition: PropTypes.shape(Fade.propTypes),
    // modalTransition - controls modal transition
    // timeout is 300ms by default to match bootstrap
    // see Fade for more details
    modalTransition: PropTypes.shape(Fade.propTypes),
    innerRef: PropTypes.object,
    // if modal should be destructed/removed from DOM after closing
    unmountOnClose: PropTypes.bool // defaults to true
  }

export default ModalExample;