import store from "../store/index.js";
import setRequests from "./setRequests.js";

export default async function setRates() {
  const acronyms = ['USD', 'EUR', 'GBP'];
  const date = new Date();
  const dateString = '' + date.getFullYear() +
    ('0' + (date.getMonth() + 1)).slice(-2) + date.getDate()
  ;
  const urls = [];
  const rates = {
    USD: undefined,
    EUR: undefined,
    GBP: undefined
  };

  acronyms.forEach(acronym =>
    urls.push(
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=' +
        acronym + '&date=' + dateString + '&json'
    )  
  );

  const ratesArray = await Promise.all(setRequests(urls));

  for (let i = 0; i < acronyms.length; i++) {
    rates[acronyms[i]] = ratesArray[i][0].rate;
  }

  store.dispatch('setRates', ['currency'], rates);
}