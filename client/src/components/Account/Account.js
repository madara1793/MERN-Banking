import React from 'react'
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import SaveIcon from '@material-ui/icons/Save';

export default function Account() {
  return (
    <ProfileWrapper>
      <div className="profile-wrapper">
            <div className="header-wrapper">
                 <h6 className="header text-white">Profile</h6>
            </div>
            <Container>
                <Row>
                    <div className="horizontal-line">
                        <h6 className="header text-white mt-3">General information</h6>
                    </div>
                    <Col md="12">
                        <div className="d-flex flex-row my-5">
                            <div className="description-wrapper mr-5">
                                <p className="text-white">Picture</p>
                            </div>
                            <div className="img-wrapper ml-5">
                                <img className="img-responsive" src="https://via.placeholder.com/150" alt="Profile Pic"/>
                            </div>
                        </div>
                    </Col>
                </Row>
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
                <Row>
                    <div className="horizontal-line">
                        <h6 className="header text-white mt-3">Contact information</h6>
                    </div>
                </Row>
                <Row className="my-5">
                    <Col md="6">
                        <Form>
                            <FormGroup row>
                            <Label className="text-white" for="name" sm={3}>Email</Label>
                                <Col sm={9}>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
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
                <Row className="my-5">
                    <Col md="12">
                        <Button color="primary" size="lg">
                            <SaveIcon className="mr-2" />
                            Save Changes
                        </Button>
                    </Col>
                </Row>
            </Container>
     </div>
    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.div`
margin-left: 2rem;
.profile-wrapper {
    width: 70rem;
    height: auto;
    background-color: #3a4149;
    border: 1px solid #000;
}
.header {
    text-align: left;
    font-family: 'Open Sans';
    padding: 1.3rem 1rem 1rem 1rem;

}
.header-wrapper {
    background-color: #343b41;
    border-bottom: 1px solid #000;
}
.horizontal-line {
    border-bottom: 1px solid #fff;
    width: 100%;
}

`;