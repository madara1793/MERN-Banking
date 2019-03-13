import React from "react";
import { connect } from "react-redux";
import { getTransactions } from "../../../actions/transactionsActions";
import PropTypes from "prop-types";
import Loader from "../../../components/Loader/Loader";
import SingleTransaction from "../SingleTransaction/SingleTransaction";

class TransactionsList extends React.Component {
  componentDidMount() {
    this.props.getTransactions();
  }
  render() {
    const { transactions } = this.props.transaction;
    if (!transactions) {
      return <Loader />;
    } else {
      return (
        <div>
          {transactions.map(
            ({
              accountNumber,
              address,
              name,
              reference,
              amount,
              _id,
              date
            }) => (
              <SingleTransaction
                key={_id}
                accountNumber={accountNumber}
                address={address}
                name={name}
                reference={reference}
                amount={amount}
                date={date}
              />
            )
          )}
          {/* Place for pagination*/}
        </div>
      );
    }
  }
}
TransactionsList.propTypes = {
  getTransactions: PropTypes.func.isRequired,
  transaction: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  transaction: state.transactions
});

export default connect(
  mapStateToProps,
  { getTransactions }
)(TransactionsList);
