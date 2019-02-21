import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import Modal from '../../components/Modal/Modal';
import uuid from 'uuid';

export default class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: [
                {id: uuid(), accountNumber: 123456, name: "Kamil", address: "bg70", reference: "payment", amount: 5000},
                {id: uuid(), accountNumber: 654321, name: "Kamil", address: "jbl", reference: "payment", amount: 3000}
            ]
        }
    }
  render() {
    return (
      <div>
           <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <Modal/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form className="mx-auto">
                            <div className="form-group">
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="search"
                                        placeholder="Search for transaction..."
                                        id="search"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-white my-3">History of your transactions</h1>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                                <div className="card-body">
                                <ListGroup>
                                    {this.state.transactions.map(({id, name}) => (
                                        <ListGroupItem key={id}>{name}</ListGroupItem>
                                    ))}
                                </ListGroup>
                                </div>
                                <div className="card-footer">

                                </div>
                        </div>
                    </div>
                </div>
           </div>
      </div>
    )
  }
}
