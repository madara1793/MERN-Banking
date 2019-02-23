import React from 'react'
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import Switch from '@material-ui/core/Switch';
import SettingsForm from './SettingsForm';
import SaveButton from '../Buttons/SaveButton';

export default function Settings() {
  return (
    <SettingsWrapper>
        <div className="profile-wrapper">
            <div className="header-wrapper">
                <h6 className="header text-white">Settings</h6>
            </div>
            <Container>
                <Row>
                <div className="horizontal-line">
                        <h6 className="header text-white mt-3">Change Password</h6>
                </div>
                </Row>
                    <SettingsForm/>
                <Row>
                <div className="horizontal-line">
                        <h6 className="header text-white mt-3">Send Email Notifications</h6>
                </div>
                </Row>
                <Row className="my-5">
                    <Col md="6" className="d-flex flex-row justify-content-between align-items-center">
                            <div className="description-wrapper">
                                <p className="text-white">When I receive a message</p>
                            </div>
                            <div className="toggle-wrapper mx-5 mb-3">
                                <Switch color="primary"/>
                            </div>
                    </Col>
                    <Col md="6" className="d-flex flex-row justify-content-between align-items-center">
                            <div className="description-wrapper">
                                <p className="text-white">When anyone logs into your account from a new device or browser</p>
                            </div>
                            <div className="toggle-wrapper mx-5 mb-3">
                                <Switch color="primary"/>
                            </div>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col md="6" className="d-flex flex-row justify-content-between align-items-center">
                            <div className="description-wrapper">
                                <p className="text-white">When profile information changes</p>
                            </div>
                            <div className="toggle-wrapper mx-5 mb-3">
                                <Switch color="primary"/>
                            </div>
                    </Col>
                    <Col md="6" className="d-flex flex-row justify-content-between align-items-center">
                            <div className="description-wrapper">
                                    <p className="text-white">Weekly Reports</p>
                            </div>
                            <div className="toggle-wrapper mx-5 mb-3">
                                <Switch color="primary"/>
                            </div>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col md="12">
                        <SaveButton />
                    </Col>
                </Row>
            </Container>
        </div>
    </SettingsWrapper>
  )
}

const SettingsWrapper = styled.div`
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