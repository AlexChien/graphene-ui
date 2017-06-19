import alt from "alt-instance";
import { fetchCoins, fetchBridgeCoins, getBackedCoins, getActiveWallets } from "common/transwiserMethods";
import TransConf from "components/DepositWithdraw/transwiser/TransConfig";

let inProgress = {};

class GatewayActions {

    fetchCoins({backer = "TRANS", url = undefined} = {}) {
        if (!inProgress["fetchCoins_" + backer]) {
            inProgress["fetchCoins_" + backer] = true;
            return (dispatch) => {
                Promise.all([
                    fetchCoins(url),
                    // fetchBridgeCoins(TransConf.api_endpoint),
                    getActiveWallets(url)
                ]).then(result => {
                    delete inProgress["fetchCoins_" + backer];
                    let [coins, tradingPairs, wallets] = result;
                    dispatch({
                        coins: coins,
                        backedCoins: getBackedCoins({allCoins: coins, tradingPairs: tradingPairs, backer: backer}).filter(a => {
                            return wallets.indexOf(a.walletType) !== -1;
                        }),
                        backer
                    });
                });
            };
        } else {
            return {};
        }
    }

    fetchBridgeCoins(url = undefined) {
        if (!inProgress["fetchBridgeCoins"]) {
            inProgress["fetchBridgeCoins"] = true;
            return (dispatch) => {
                Promise.all([
                    fetchCoins(url),
                    fetchBridgeCoins(TransConf.BASE),
                    getActiveWallets(url)
                ]).then(result => {
                    delete inProgress["fetchBridgeCoins"];
                    let [coins, bridgeCoins, wallets] = result;
                    dispatch({
                        coins,
                        bridgeCoins,
                        wallets
                    });
                });
            };
        } else {
            return {};
        }
    }
  }

export default alt.createActions(GatewayActions);
