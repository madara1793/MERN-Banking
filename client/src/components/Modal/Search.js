import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';

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

  render() {
    return (
      <div>
        <Button color="transparent" onClick={this.toggle}>
            <i style={{color: '#fff'}} className="fa fa-search"></i>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
              <SearchWrapper>
                <Form>
                    <FormGroup>
                        <Input
                            className="form-control"
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search..."
                        />
                    </FormGroup>
                </Form>
              </SearchWrapper>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const SearchWrapper = styled.div`
   .form-control {
       height: 5rem;
       border: 0;
       font-size: 2rem;
       border-bottom: 1px solid #ddd;
   }

   input:focus {
       border: 0;
   }
   input::placeholder {
       font-size: 2rem;
   }

`;

export default ModalExample;