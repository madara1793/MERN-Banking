import React from 'react';
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
                              <span className="to text-white">To</span>
                          </div>
                          <div className="form-group">
                              <label for="amount" className="amount text-white">Amount</label>
                              <input
                                  id="amount"
                                  class="form-control"
                                  type="text"
                                  name="amount"
                                  value={this.state.amount}
                                />
                          </div>
                      </form>
                      <h3 className="result">0</h3>
                      <button className="btn-lg btn-primary btn-convert mb-5">Convert</button>
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