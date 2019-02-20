import React, { Component } from 'react'
import styled from 'styled-components';
import {Button} from 'reactstrap';

export default class Transactions extends Component {
  render() {
    return (
      <div>
           <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <Button className="mb-5" outline color="primary" size="lg">New Transfer</Button>
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
                </div>
           </div>
      </div>
    )
  }
}
