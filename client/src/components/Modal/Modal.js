import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Fade } from 'reactstrap';
import PropTypes from 'prop-types';
import {Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from 'react-redux';
import {addTransaction} from '../../actions/transactionsActions';
import uuid from 'uuid';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      accountnumber: null,
      name: '',
      address: '',
      reference: '',
      amount: null
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})

  }
  onHandleSubmit = e => {
     e.preventDefault();
     let newTransaction = {
        id: uuid(),
        accountnumber: this.state.accountnumber,
        name: this.state.name,
        address: this.state.address,
        reference: this.state.reference,
        amount: this.state.amount
     }

     // Add transaction
     this.props.addTransaction(newTransaction);

     //Close modal
     this.toggle();
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <Button className="mb-3" color="primary" size="lg" onClick={this.toggle}>New Transfer</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>New Transfer</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.onHandleSubmit}>
        <FormGroup>
          <Label for="accountnumber">Recipient's account number</Label>
          <Input
            type="number"
            name="accountnumber"
            id="accountnumber"
            placeholder="Recipient's account number"
            onChange={this.onChange}
           />
        </FormGroup>
        <FormGroup>
          <Label for="name">Recipient's name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Recipient's name"
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Recipient's address</Label>
          <Input
            type="textarea"
            name="address"
            id="address"
            placeholder="Recipient's address"
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="reference">Reference</Label>
          <Input
            type="text"
            name="reference"
            id="reference"
            placeholder="Reference..."
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="amount">Amount</Label>
          <Input
            type="number"
            name="amount"
            id="amount"
            placeholder="Amount..."
            onChange={this.onChange}
          />
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
    isOpen:  PropTypes.bool,
    autoFocus: PropTypes.bool,
    centered: PropTypes.bool,
    size: PropTypes.string,
    toggle:  PropTypes.func,
    role: PropTypes.string, // defaults to "dialog"
    labelledBy: PropTypes.string,
    keyboard: PropTypes.bool,
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['static'])
    ]),
    onEnter: PropTypes.func,
    onExit: PropTypes.func,
    onOpened: PropTypes.func,
    onClosed: PropTypes.func,
    className: PropTypes.string,
    wrapClassName: PropTypes.string,
    modalClassName: PropTypes.string,
    backdropClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    fade: PropTypes.bool,
    cssModule: PropTypes.object,
    zIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    backdropTransition: PropTypes.shape(Fade.propTypes),
    modalTransition: PropTypes.shape(Fade.propTypes),
    innerRef: PropTypes.object,
    unmountOnClose: PropTypes.bool // defaults to true
  }





export default connect()(ModalExample);