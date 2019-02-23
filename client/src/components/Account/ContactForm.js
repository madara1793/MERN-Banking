import React from 'react'
import { Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

const ContactForm = (props) => {
  return (
    <Row className="my-5">
        <Col md="6">
            <Form>
                <FormGroup row>
                <Label className="text-white" for="email" sm={3}>Email</Label>
                    <Col sm={9}>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            value={props.auth.user.email}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                <Label className="text-white" for="name" sm={3}>Phone</Label>
                    <Col sm={9}>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                        />
                    </Col>
                </FormGroup>
            </Form>
        </Col>
        <Col md="6">
            <Form>
                <FormGroup row>
                <Label className="text-white" for="name" sm={3}>Office location</Label>
                    <Col sm={9}>
                    <Input type="select" name="select" id="select">
                        <option>London</option>
                        <option>Tokyo</option>
                        <option>San Francisco</option>
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                <Label className="text-white" for="name" sm={3}>Room</Label>
                    <Col sm={9}>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                        />
                    </Col>
                </FormGroup>
            </Form>
        </Col>
    </Row>
  )
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(ContactForm);