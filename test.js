  const axios = require('axios')

const options = {
  method: 'POST',
  url: 'https://api.pagar.me/1/payment_links?api_key=ak_live_WEW4OzWoIjPbkIrroaOfbQKlbKHgrv',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  data: {
    payment_config: {
      boleto: {enabled: true, expires_in: 5},
      credit_card: {interest_rate: 0.01, max_installments: 10, enabled: true, free_installments: 5},
      default_payment_method: 'credit_card'
    },
    postback_config: {orders: 'order', transactions: 'transactions'},
    review_informations: false,
    name: 'Teste',
    amount: 100,
    max_orders: 1,
    expires_in: 900,
    items:{id:'3333',title: 'Testee',unit_price:1000, quantity:1, tangible:true}
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error.data);
  });