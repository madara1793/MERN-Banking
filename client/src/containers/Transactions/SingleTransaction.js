import React from 'react'
import { connect } from 'react-redux';
import { getTransactions } from '../../actions/transactionsActions';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';
import Loader from '../../components/Loader/Loader'
class SingleTransaction extends React.Component {
    componentDidMount() {
        this.props.getTransactions();
    }
    render() {
        const {transactions} = this.props.transaction;
        if(!transactions) {
            return <Loader/>;
        } else {
            return (
                <div>
                     {transactions.map(({accountNumber, address, name, reference, amount, _id, date}) => (
                         <ListGroupItem key={_id}>
                             <div className="d-flex flex-row justify-content-start align-items-center">
                                    <h6 className="mr-4"><strong>Payee:</strong> {name}</h6>
                                    <h6 className="mr-4"><strong>Address:</strong> {address}</h6>
                                    <h6 className="mr-4"><strong>Account Number:</strong> {accountNumber}</h6>
                                    <h6><strong>Reference:</strong> {reference}</h6>
                             </div>
                             <div className="d-flex flex-row justify-content-start align-items-center">
                                    <h6 className="mr-4"><strong>Amount:</strong> {amount}</h6>
                                    <h6><strong>Date:</strong> {date.toString().replace(/(T)/, ' ')}</h6>
                             </div>
                         </ListGroupItem>
                     ))}
                </div>
              )
        }

    }

}
SingleTransaction.propTypes = {
    getTransactions: PropTypes.func.isRequired,
    transaction: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    transaction: state.transactions
});


export default connect(mapStateToProps, {getTransactions})(SingleTransaction);
