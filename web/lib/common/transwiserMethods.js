import ls from "./localStorage";
import {transwiserAPIs} from "components/DepositWithdraw/transwiser/TransConfig";
const transwiserStorage = new ls("");

export function fetchCoins(url = (transwiserAPIs.BASE_OL + transwiserAPIs.COINS_LIST)) {
    return fetch(url).then(reply => reply.json().then(result => {
        return result;
    })).catch(err => {
        console.log("error fetching transwiser list of coins", err, url);
    });
}

export function fetchBridgeCoins(baseurl = (transwiserAPIs.BASE)) {
    let url = baseurl + transwiserAPIs.TRADING_PAIRS;
    return fetch(url, {method: "get", headers: new Headers({"Accept": "application/json"})}).then(reply => reply.json().then(result => {
        return result;
    })).catch(err => {
        console.log("error fetching transwiser list of coins", err, url);
    });
}

export function getDepositLimit(inputCoin, outputCoin, url = (transwiserAPIs.BASE + transwiserAPIs.DEPOSIT_LIMIT)) {
    return fetch(url + "?inputCoinType=" + encodeURIComponent(inputCoin) + "&outputCoinType=" + encodeURIComponent(outputCoin),
         {method: "get", headers: new Headers({"Accept": "application/json"})}).then(reply => reply.json().then(result => {
        return result;
    })).catch(err => {
        console.log("error fetching deposit limit of", inputCoin, outputCoin, err);
    });
}

export function estimateOutput(inputAmount, inputCoin, outputCoin, url = (transwiserAPIs.BASE + transwiserAPIs.ESTIMATE_OUTPUT)) {
    return fetch(url + "?inputAmount=" + encodeURIComponent(inputAmount) +"&inputCoinType=" + encodeURIComponent(inputCoin) + "&outputCoinType=" + encodeURIComponent(outputCoin),
         {method: "get", headers: new Headers({"Accept": "application/json"})}).then(reply => reply.json().then(result => {
        return result;
    })).catch(err => {
        console.log("error fetching deposit limit of", inputCoin, outputCoin, err);
    });
}

export function getActiveWallets(url = (transwiserAPIs.BASE_OL + transwiserAPIs.ACTIVE_WALLETS)) {
    return fetch(url).then(reply => reply.json().then(result => {
        return result;
    })).catch(err => {
        console.log("error fetching transwiser active wallets", err, url);
    });
}

export function requestDepositAddress({inputCoinType, outputCoinType, outputAddress, url = transwiserAPIs.BASE_OL, stateCallback}) {
    let body = {
        inputCoinType,
        outputCoinType,
        outputAddress
    };

    let body_string = JSON.stringify(body);

    fetch( url + "/simple-api/initiate-trade", {
        method:"post",
        headers: new Headers( { "Accept": "application/json", "Content-Type":"application/json" } ),
        body: body_string
    }).then( reply => { reply.json()
        .then( json => {
            // console.log( "reply: ", json )
            let address = {"address": json.inputAddress || "unknown", "memo": json.inputMemo, error: json.error || null};
            if (stateCallback) stateCallback(address);
        }, error => {
            // console.log( "error: ",error  );
            if (stateCallback) stateCallback({"address": "unknown", "memo": null});
        });
    }, error => {
        // console.log( "error: ",error  );
        if (stateCallback) stateCallback({"address": "unknown", "memo": null});
    }).catch(err => {
        console.log("fetch error:", err);
    });
}

export function getBackedCoins({allCoins, tradingPairs, backer}) {
    let coins_by_type = {};
    allCoins.forEach(coin_type => coins_by_type[coin_type.coinType] = coin_type);

    let allowed_outputs_by_input = {};
    tradingPairs.forEach(pair => {
        if (!allowed_outputs_by_input[pair.inputCoinType])
            allowed_outputs_by_input[pair.inputCoinType] = {};
        allowed_outputs_by_input[pair.inputCoinType][pair.outputCoinType] = true;
    });

    let transwiserBackedCoins = [];
    allCoins.forEach(coin_type => {
        if (coin_type.walletSymbol.startsWith(backer + ".") && coin_type.backingCoinType && coins_by_type[coin_type.backingCoinType]) {
            let isDepositAllowed = allowed_outputs_by_input[coin_type.backingCoinType] && allowed_outputs_by_input[coin_type.backingCoinType][coin_type.coinType];
            let isWithdrawalAllowed = allowed_outputs_by_input[coin_type.coinType] && allowed_outputs_by_input[coin_type.coinType][coin_type.backingCoinType];

            transwiserBackedCoins.push({
                name: coins_by_type[coin_type.backingCoinType].name,
                walletType: coins_by_type[coin_type.backingCoinType].walletType,
                backingCoinType: coins_by_type[coin_type.backingCoinType].walletSymbol,
                symbol: coin_type.walletSymbol,
                supportsMemos: coins_by_type[coin_type.backingCoinType].supportsOutputMemos,
                depositAllowed: isDepositAllowed,
                withdrawalAllowed: isWithdrawalAllowed
            });
        }});
    return transwiserBackedCoins;
}

export function validateAddress({url = transwiserAPIs.BASE, walletType, newAddress}) {
    if (!newAddress) return new Promise((res) => res());
    return fetch(
        url + "/wallets/" + walletType + "/address-validator?address=" + encodeURIComponent(newAddress),
        {
            method: "get",
            headers: new Headers({"Accept": "application/json"})
        }).then(reply => reply.json().then( json => json.isValid))
        .catch(err => {
            console.log("validate error:", err);
        })
}

function hasWithdrawalAddress(wallet) {
    return transwiserStorage.has(`history_address_${wallet}`);
}

function setWithdrawalAddresses({wallet, addresses}) {
    transwiserStorage.set(`history_address_${wallet}`, addresses);
}

function getWithdrawalAddresses(wallet) {
    return transwiserStorage.get(`history_address_${wallet}`, []);
}

function setLastWithdrawalAddress({wallet, address}) {
    transwiserStorage.set(`history_address_last_${wallet}`, address);
}

function getLastWithdrawalAddress(wallet) {
    return transwiserStorage.get(`history_address_last_${wallet}`, "");
}

export const WithdrawAddresses = {
    has: hasWithdrawalAddress,
    set: setWithdrawalAddresses,
    get: getWithdrawalAddresses,
    setLast: setLastWithdrawalAddress,
    getLast: getLastWithdrawalAddress
};
