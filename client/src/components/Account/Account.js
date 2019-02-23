import React from 'react'
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import ContactForm from './ContactForm';
import NameForm from './NameForm';
import SaveButton from '../Buttons/SaveButton';

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
                            <figure className="img-wrapper ml-5">
                                <img className="img-responsive" src="https://via.placeholder.com/150" alt="Profile Pic"/>
                            </figure>
                        </div>
                    </Col>
                </Row>
                    <NameForm/>
                <Row>
                    <div className="horizontal-line">
                        <h6 className="header text-white mt-3">Contact information</h6>
                    </div>
                </Row>
                    <ContactForm/>
                <Row className="my-5">
                    <Col md="12">
                    <SaveButton />
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