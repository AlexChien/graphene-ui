import React from "react";
import {Link} from "react-router";
import {ChainStore} from "graphenejs-lib";
import ChainTypes from "components/Utility/ChainTypes";
import BindToChainState from "components/Utility/BindToChainState";
import Post from "common/formPost";

class FiatTransactionHistory extends React.Component {
    static propTypes = {
        rpc_url: React.PropTypes.string,
        account: ChainTypes.ChainAccount,
    };

    constructor(props) {
        super(props);
        this.state = {
             current_status: 'never_loaded',
             withdrawals: null,
             deposits: null,
             error: null
        }
    }

    onShowTransactionHistory() {
         let json_rpc_request = {
          "jsonrpc": "2.0",
          "method": "getRequestsList",
          "params": {
             "bitsharesAccountName": this.props.account.get('name')
          },
          "id": 1
         };
         let get_transaction_history_promise = fetch(this.props.rpc_url,
                                                     {method: 'POST',
                                                      headers: new Headers({"Accept": "application/json",
                                                      "content-type":"application/x-www-form-urlencoded"}),
                                                     body: 'rq=' + encodeURIComponent(JSON.stringify(json_rpc_request)) })
                                              .then(response => response.json());

         get_transaction_history_promise.then((json_response) => {
                if ('result' in json_response)
                {
                  this.setState({
                     current_status: 'loaded',
                     withdrawals: json_response.result.withdrawals,
                     deposits: json_response.result.deposits,
                     error: null
                  });
                }
                else if ('error' in json_response && 'message' in json_response.error)
                  throw json_repsonse.error.message;
                else
                   throw 'Unexpected response';
            })
            .catch((error) => {
                this.setState({
                     current_status: 'error',
                     withdrawals: null,
                     deposits: null,
                     error: 'Error getting transaction history: ' + error
                });
            });
    }

    render() {
        if( !this.props.account )
            return null;

        let transwiser_withdrawal_history_fragment = null;
        if (this.state.current_status === 'loaded')
        {
            let transwiser_withdrawal_history_rows = [];
            if (this.state.withdrawals.length)
            {
                for (var i = 0; i < this.state.withdrawals.length; ++i)
                    transwiser_withdrawal_history_rows.push(<tr>
                                                              <td>{this.state.withdrawals[i].amount} {this.state.withdrawals[i].currency}</td>
                                                              <td>{this.state.withdrawals[i].status}</td>
                                                            </tr>);
                transwiser_withdrawal_history_fragment = <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Withdrawal Amount</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                { transwiser_withdrawal_history_rows }
                                                            </tbody>
                                                         </table>;
            }
            else
                transwiser_withdrawal_history_fragment = <p>No withdrawals</p>;
        }

        let transwiser_deposit_history_fragment = null;
        if (this.state.current_status === 'loaded')
        {
            if (this.state.deposits.length)
            {
                let transwiser_deposit_history_rows = [];
                for (var i = 0; i < this.state.deposits.length; ++i)
                    transwiser_deposit_history_rows.push(<tr>
                                                              <td>{this.state.deposits[i].amount} {this.state.deposits[i].currency}</td>
                                                              <td><a href={this.state.deposits[i].link} target="_blank">link</a></td>
                                                              <td>{this.state.deposits[i].status}</td>
                                                         </tr>);
                transwiser_deposit_history_fragment = <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Deposit Amount</th>
                                                                    <th>Details</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                { transwiser_deposit_history_rows }
                                                            </tbody>
                                                         </table>;
            }
            else
                transwiser_deposit_history_fragment = <p>No deposits</p>;
        }




        let transwiser_transaction_history_fragment = null;

        if (this.state.current_status === 'error' )
            transwiser_transaction_history_fragment = <div className="content-block">
                                                        <button className={"button outline"} onClick={this.onShowTransactionHistory.bind(this)}> Retry </button>
                                                        <p>{this.state.error}</p>
                                                      </div>;
        else if (this.state.current_status === 'loading' )
            transwiser_transaction_history_fragment = <div className="content-block">
                                                        <button className={"button outline"} onClick={this.onShowTransactionHistory.bind(this)} disabled="true"> Show Transaction History </button>
                                                        <p>Loading...</p>
                                                      </div>;
        else
        {
            let button_label = this.state.current_status === 'never_loaded' ? 'Show Transaction History' : 'Refresh';
            transwiser_transaction_history_fragment = <div className="content-block">
                                                        <br/>
                                                        <h4>Transaction History</h4>
                                                        <button className={"button outline"} onClick={this.onShowTransactionHistory.bind(this)}> {button_label} </button>
                                                        {transwiser_withdrawal_history_fragment}
                                                        {transwiser_deposit_history_fragment}
                                                      </div>;
        }

        return transwiser_transaction_history_fragment;
    }
}; // OpenLedgerFiatTransactionHistory

export default BindToChainState(FiatTransactionHistory, {keep_updating:true});
