import axios from "axios";
import {GET_CURRENCIES} from './types';


const url = `https://api.exchangeratesapi.io/latest`;


function requestCurrencies(payload) {
    return {
      type: GET_CURRENCIES,
      data: payload
    }
  }

export const getCurrencies =  dispatch => {
    axios
    .get(`https://api.exchangeratesapi.io/latest`)
    .then(response => {
      const currencyArr = [];
      for(const key in response.data.rates) {
          currencyArr.push(key);
      }
      dispatch(requestCurrencies(currencyArr));
      this.setState({
          currencies: currencyArr.sort()

      })

    })
    .catch(err => {
          console.log("Opps", err.message);
    });
}

