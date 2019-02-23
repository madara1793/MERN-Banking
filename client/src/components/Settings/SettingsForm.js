import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Col, Row} from 'reactstrap';

class SettingsForm extends Component {
  render() {
    return (
      <Row className="my-5 mx-0">
        <Col md="6">
            <Form>
                <FormGroup row>
                <Label className="text-white" for="name" sm={3}>Password</Label>
                    <Col sm={9}>
                        <Input
                            type="password"
                            name="name"
                            id="name"
                            value="polska12"
                        />
                    </Col>
                </FormGroup>
            </Form>
        </Col>
        <Col md="6">
            <Form>
                <FormGroup row>
                <Label className="text-white" for="name" sm={3}>Confirm Password</Label>
                    <Col sm={9}>
                    <Input
                        type="password"
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
}
export default SettingsForm;