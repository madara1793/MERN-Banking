import React, { Component } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import Modal from "../../components/Modal/Modal";
import TransactionsList from "../Transactions/TransactionsList/TransactionsList";
import styled from "styled-components";

class Transactions extends Component {
  render() {
    return (
      <TransactionsWrapper className="mb-5">
        <div className="header-wrapper">
          <h6 className="header text-white">Transactions</h6>
        </div>
        <Container>
          <Row>
            <Col md="4" className="my-5">
              <Modal />
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Form className="mx-auto">
                <FormGroup>
                  <Input
                    className="form-control"
                    type="text"
                    name="search"
                    placeholder="Search for transaction by Payee..."
                    id="search"
                  />
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <h4 className="text-white my-3 text-center">
                History of your transactions
              </h4>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md="12">
              <TransactionsList />
            </Col>
          </Row>
        </Container>
      </TransactionsWrapper>
    );
  }
}

const TransactionsWrapper = styled.div`
  margin-left: 2rem;
  width: 70rem;
  height: auto;
  background-color: #3a4149;
  border: 1px solid #000;

  .header {
    text-align: left;
    font-family: "Open Sans";
    padding: 1.3rem 1rem 1rem 1rem;
  }
  .text-white {
    font-family: Open Sans;
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

export default Transactions;
