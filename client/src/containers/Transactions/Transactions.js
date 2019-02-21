import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import Modal from '../../components/Modal/Modal';
import { connect } from 'react-redux';
import { getTransactions } from '../../actions/transactionsActions';
import PropTypes from 'prop-types';

class Transactions extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }
  render() {
      const {transactions} = this.props.transaction;
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
                                    {transactions.map(({name, id}) => (
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

Transactions.propTypes = {
    getTransactions: PropTypes.func.isRequired,
    transaction: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    transaction: state.transactions
});


export default connect(mapStateToProps, {getTransactions})(Transactions);