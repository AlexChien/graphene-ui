function is_development(){
  window && window.location.host.indexOf('localhost') != -1
}

module.exports = function(){

  var host = is_development ? "http://localhost:3000" : "https://api.transwiser.com";
  var api_endpoint = host + "/api/v3";

  var development = {
    homepage: "https://www.transwiser.com",
    support_email: "support@transwiser.com",
    issuer: "trans-wallet",
    issuer_id: "1.2.121",

    default_deposit_coin: "PLS",
    default_withdraw_coin: "TRANS.PLS",

    withdraw_address_length_min: 1,

    // api
    api_endpoint: api_endpoint,
    setting_url: api_endpoint + "/setting",
    request_deposit_address_url: api_endpoint + "/request_deposit_address",
    validate_address_url: api_endpoint + "/validate_address/{wallet}/{address}",
    fiat_transaction_history_url: api_endpoint + "/fiat_transactions",
    fait_deposit_widthraw_url: api_endpoint + "fiat_authorized"
  };

  var production = {

  };

  // return is_development ? development : production;
  return development;
}()
