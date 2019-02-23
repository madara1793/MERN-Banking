import React from 'react'
import { Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input} from 'reactstrap';
export default function NameForm() {
  return (
    <Row>
    <Col md="6">
        <Form>
            <FormGroup row>
            <Label className="text-white" for="name" sm={3}>First Name</Label>
                <Col sm={9}>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
            <Label className="text-white" for="name" sm={3}>Last Name</Label>
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
            <Label className="text-white" for="name" sm={3}>Department</Label>
                <Col sm={9}>
                <Input type="select" name="select" id="select">
                    <option>Web Development</option>
                    <option>System Development</option>
                    <option>Sales</option>
                    <option>Human Resources</option>
                </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
            <Label className="text-white" for="name" sm={3}>Occupation</Label>
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
