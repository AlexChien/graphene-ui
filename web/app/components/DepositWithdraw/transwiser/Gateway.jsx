import React from "react";
import GatewayDepositRequest from "./GatewayDepositRequest";
import TransConf from "./MingEXConfig";
import Translate from "react-translate-component";
import AccountBalance from "components/Account/AccountBalance";
import { connect } from "alt-react";
import SettingsStore from "stores/SettingsStore";
import SettingsActions from "actions/SettingsActions";
import { RecentTransactions, TransactionWrapper } from "components/Account/RecentTransactions";
import Immutable from "immutable";
import cnames from "classnames";
import AssetName from "components/Utility/AssetName";
import assetUtils from "common/asset_utils";
import BindToChainState from "../../Utility/BindToChainState";
import LoadingIndicator from "../../LoadingIndicator";

class Gateway extends React.Component {

    constructor(props) {
        super();

        this.issuers = {
          transwiser: {name: TransConf.issuer, id: TransConf.issuer_id, support: TransConf.support_email}
        };

        this.state = {
            activeCoin: this._getActiveCoin(props, {action: "deposit"}),
            action: "deposit"
        };
    }

    _getActiveCoin(props, state) {
        let cachedCoin = props.viewSettings.get(`activeCoin_${props.provider}_${state.action}`, null);
    		let firstTimeCoin = null;
    		if ((props.provider == 'transwiser') && (state.action == 'deposit')) {
    			firstTimeCoin = TransConf.default_deposit_coin;
    		}

    		if ((props.provider == 'transwiser') && (state.action == 'withdraw')) {
    			firstTimeCoin = TransConf.default_withdraw_coin;
    		}

        let activeCoin = cachedCoin ? cachedCoin : firstTimeCoin;
        return activeCoin;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.provider !== this.props.provider) {
            this.setState({
                activeCoin: this._getActiveCoin(nextProps, this.state.action)
            });
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.action !== this.state.action) {
    //         this.setState({
    //             activeCoin: this._getActiveCoin(nextProps, nextState)
    //         });
    //     }

    //     return true;
    // }

    onSelectCoin(e) {
        this.setState({
            activeCoin: e.target.value
        });

        let setting = {};
        setting[`activeCoin_${this.props.provider}_${this.state.action}`] = e.target.value;
        SettingsActions.changeViewSetting(setting);
    }

    changeAction(type) {

        let activeCoin = this._getActiveCoin(this.props, {action: type});

        this.setState({
            action: type,
            activeCoin: activeCoin
        });
    }

    render() {
        let {coins, account, provider} = this.props;
        let {activeCoin, action} = this.state;

        if (!coins.length) {
            return <LoadingIndicator />;
        }

        let filteredCoins = coins.filter(a => {
            if (!a || !a.backingCoinType) {
                return false;
            } else {
                return true;
            }
        });

        let coinOptions = filteredCoins.map(coin => {
            let option = action === "deposit" ? coin.backingCoinType.toUpperCase() : coin.symbol;
            return <option value={option} key={coin.symbol}>{option}</option>;
        }).filter(a => {
            return a !== null;
        });

        let coin = filteredCoins.filter(coin => {
            return (action === "deposit" ? coin.backingCoinType.toUpperCase() === activeCoin : coin.symbol === activeCoin);
        })[0];

        let issuer = this.issuers[provider];

        let isDeposit = this.state.action === "deposit";

        return (

            <div style={this.props.style}>
                <div style={{paddingBottom: 15}}><Translate component="h5" content="gateway.transwiser.gateway_text" /></div>
                <div style={{paddingBottom: 15}}>
                    <div style={{marginRight: 10}} onClick={this.changeAction.bind(this, "deposit")} className={cnames("button", action === "deposit" ? "active" : "outline")}><Translate content="gateway.deposit" /></div>
                    <div onClick={this.changeAction.bind(this, "withdraw")} className={cnames("button", action === "withdraw" ? "active" : "outline")}><Translate content="gateway.withdraw" /></div>
                </div>

                {!coin ? <LoadingIndicator /> :
                <div>
                    <div>
                        <span><Translate content={"gateway.choose_" + action} />: </span>
                        <select
                            style={{
                                marginLeft: 5,
                                display: "inline",
                                maxWidth: "15rem"
                            }}
                            className="external-coin-types bts-select"
                            onChange={this.onSelectCoin.bind(this)}
                            value={activeCoin}
                        >
                            {coinOptions}
                        </select>
                    </div>

                    <div style={{marginBottom: 15}}>
                        <GatewayDepositRequest
                            key={`${provider}.${coin.symbol}`}
                            gateway={provider}
                            issuer_account={issuer.name}
                            account={account}
                            deposit_asset={coin.backingCoinType.toUpperCase()}
                            deposit_asset_name={coin.name}
                            deposit_coin_type={coin.backingCoinType.toLowerCase()}
                            deposit_account={coin.depositAccount}
                            deposit_wallet_type={coin.walletType}
                            receive_asset={coin.symbol}
                            receive_coin_type={coin.symbol.toLowerCase()}
                            supports_output_memos={coin.supportsMemos}
                            action={this.state.action}
                        />
                        <div style={{padding: 15}}><Translate content="gateway.transwiser.support" /> <a href={"mailto:" + issuer.support}>{issuer.support}</a></div>
                    </div>

                    {coin && coin.symbol ?
                    <TransactionWrapper
                        asset={coin.symbol}
                        fromAccount={
                            isDeposit ? (issuer.id) :
                            this.props.account.get("id")
                        }
                        to={
                            isDeposit ? ( this.props.account.get("id") ) :
                            (issuer.id)
                        }

                    >
                        { ({asset, to, fromAccount}) => {
                            return <RecentTransactions
                                accountsList={Immutable.List([this.props.account.get("id")])}
                                limit={10}
                                compactView={true}
                                fullHeight={true}
                                filter="transfer"
                                title={<Translate content={"gateway.recent_" + this.state.action} />}
                                customFilter={{
                                    fields: ["to", "from", "asset_id"],
                                    values: {
                                            to: to.get("id"),
                                            from: fromAccount.get("id") ,
                                            asset_id: asset.get("id")
                                        }

                                    }}
                            />
                            }
                        }
                    </TransactionWrapper> : null}
                </div>
                }
            </div>
        )
    }
}

export default connect(Gateway, {
    listenTo() {
        return [SettingsStore];
    },
    getProps() {
        return {
            viewSettings: SettingsStore.getState().viewSettings
        };
    }
});
