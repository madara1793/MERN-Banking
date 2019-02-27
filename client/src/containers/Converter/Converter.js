import React from 'react';
import styled from 'styled-components';
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
        <ConverterWrapper>
            <div className="wrapper text-center">
                        <div className="header-wrapper">
                            <h6 className="header text-white">Currency Converter</h6>
                        </div>
                      <form className="form my-5 mx-auto">
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
                          <div className="form-group">
                              <label for="amount" className="amount text-white">Amount</label>
                              <input
                                  id="amount"
                                  class="form-control"
                                  type="text"
                                  name="amount"
                                  value={this.state.amount}
                                  onChange={(event) => this.setState({
                                      amount: event.target.value
                                  })}/>
                          </div>
                      </form>
                      {this.state.result && <h3 className="result">{this.state.result}</h3>}
                      <button onClick={this.handleConversion} className="btn-lg btn-primary btn-convert mb-5">Convert</button>
              </div>
        </ConverterWrapper>
      );
  }
}

const ConverterWrapper = styled.div`
margin-left: 2rem;
width: 70rem;
height: auto;
background-color: #3a4149;
border: 1px solid #000;
.header {
  text-align: left;
  font-family: 'Open Sans';
  padding: 1.3rem 1rem 1rem 1rem;
}
.text-white {
  font-family: Open Sans;
}
.form {
  width: 20%;
}
.header-wrapper {
  background-color: #343b41;
  border-bottom: 1px solid #000;
}
`;

export default Converter;