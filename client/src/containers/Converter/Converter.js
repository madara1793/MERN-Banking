import React from 'react';
import {Button} from 'reactstrap';
import axios from 'axios';
import styled from 'styled-components';

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

        this.handleConversion = this.handleConversion.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
    }
    componentDidMount() {
        axios
              .get(`https://api.exchangeratesapi.io/latest`)
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

    }

    handleConversion() {
            if(this.state.from !== this.state.to) {
                axios
                     .get(`https://api.exchangeratesapi.io/latest?base=${this.state.from}&symbols=${this.state.to}`)
                     .then(response => {
                         const result = this.state.amount * (response.data.rates[this.state.to]);
                         this.setState({
                             result: result.toFixed(2)
                         })

                     })
                     .catch(err => {
                        console.log("Oops", err);
                     });
            } else {
                this.setState({
                    result: "You cannot convert the same currency"
                })
            }

    }
    handleSelection(event) {
        if(event.target.name === 'from') {
            this.setState({
                from: event.target.value
            })
        }
        if(event.target.name === 'to') {
            this.setState({
                to: event.target.value
            })
        }
    }
    render() {
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

export default Converter;