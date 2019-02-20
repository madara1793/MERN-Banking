import React from 'react';
import {Button} from 'reactstrap';
import styled from 'styled-components';
import { connect } from "react-redux";
import {getCurrencies} from '../../actions/converterActions';
import axios from 'axios';
class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             currencies: [],
             from: 'EUR',
             to: 'USD',
             result: null,
             amount: 1

        };
    }
    componentDidMount() {
      axios
      .get('https://cors-anywhere.herokuapp.com/https://data.fixer.io/api/latest?access_key=584b3f3eea42ceda55cd121bd432d4b5')
      .then(response => {
        const currencyArr = [];
        for(const key in response.data.rates) {
            currencyArr.push(key);

        }
        this.setState({
            currencies: currencyArr.sort()
        })
      })
      .catch(err => {
            console.log("Opps", err.message);
      });
      console.log(this.response)
    }

    render() {
      console.log(this.state.currencies);
      return (
        <ConverterWrapper className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-white text-center">Currency Converter</h1>
                        </div>
                        <div className="col-md-12">
                            <div className="card">
                              <div className="card-body mx-auto">
                                  <form>
                                  <span className="amount text-white">Amount</span>
                                    <div className="form-group">
                                    <input
                                          className="amount-input"
                                          type="text"
                                          name="amount"
                                          value={this.state.amount}
                                          onChange={(event) => this.setState({
                                              amount: event.target.value
                                          })}
                                      />
                                    </div>
                                    <div className="form-group">
                                    <span className="from text-white">From</span>
                                        <select
                                            name="from"
                                            onChange={(event) => this.handleSelection(event)}
                                            value={this.state.from}>
                                            {this.state.currencies.map((cur, i) => (
                                                <option key={i}>{cur}</option>
                                            ))}
                                          </select>
                                        <span className="to text-white">To</span>
                                        <select
                                            name="to"
                                            onChange={(event) => this.handleSelection(event)}
                                            value={this.state.to}>
                                        {this.state.currencies.map((cur, i) => (
                                            <option key={i}>{cur}</option>
                                        ))}
                                      </select>
                                    </div>
                                  </form>
                                  {this.state.result && <h3 className="result py-3">{this.state.result}</h3>}
                                  <Button color="primary" size="lg">Convert</Button>
                              </div>
                            </div>
                        </div>
                    </div>
        </ConverterWrapper>
      );
    }

  }


const ConverterWrapper = styled.div`

.card {
  background-color: #27293d;
  border: 1px solid #000;
}
`;

const mapStateToProps = state => {
  return {
    currencies: state.cur
  }
}

export default connect(mapStateToProps, {getCurrencies})(Converter);