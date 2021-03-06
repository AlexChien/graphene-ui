import React from "react";
import BaseComponent from "./BaseComponent";
import forms from "newforms";
import classNames from "classnames";
import AccountActions from "actions/AccountActions";
import AccountStore from "stores/AccountStore";
import PrivateKeyActions from "actions/PrivateKeyActions";

class CreateAccount extends BaseComponent {
    constructor() {
        super();
        this.state = {validAccountName: false};
    }

    onFormChange() {
        let form = this.refs.accountForm.getForm();
        let isValid = form.validate();
        // TODP: validate account name
        this.setState({validAccountName: isValid});
    }

    onSubmit(e) {
        e.preventDefault();
        let form = this.refs.accountForm.getForm();
        let isValid = form.validate();
        let name = form.cleanedData.name;
        if(isValid) {
            AccountActions.createAccount(name).then( (keys_data) => {
                return AccountActions.getAccount(name).then( () => {
                    let account_store_state = AccountStore.getState();
                    let account = account_store_state.browseAccounts.get(account_store_state.account_name_to_id[name]);
                    let owner_key = {
                        id: "owner:" + name,
                        key_id: account.owner.auths[0][0],
                        privkey: keys_data.owner_privkey.toWif(),
                        pubkey: keys_data.owner_pubkey.toBtsPublic(),
                        password_checksum: ""
                    };
                    let active_key = {
                        id: "active:" + name,
                        key_id: account.active.auths[0][0],
                        privkey: keys_data.active_privkey.toWif(),
                        pubkey: keys_data.active_pubkey.toBtsPublic(),
                        password_checksum: ""
                    };
                    PrivateKeyActions.addKey(owner_key);
                    PrivateKeyActions.addKey(active_key);
                    this.context.router.transitionTo("account", {name: name});
                });
            });
        }
    }

    render() {
        let AccountForm = forms.Form.extend({
            errorCssClass: "has-error",
            name: forms.CharField({ initial: "", placeholder: "Account Name" })
        });
        let buttonClass = classNames("button", {disabled: !this.state.validAccountName});
        return <div className="grid-block vertical">
            <div className="grid-block page-layout">
                <div className="grid-block medium-4">
                    <div className="grid-content">
                        <h4>Create New Account</h4>
                        <form onSubmit={this.onSubmit.bind(this)} onChange={this.onFormChange.bind(this)} noValidate>
                            <forms.RenderForm form={AccountForm} ref="accountForm"/>
                            <button className={buttonClass}>CREATE ACCOUNT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>;
    }
}

CreateAccount.contextTypes = {router: React.PropTypes.func.isRequired};

export default CreateAccount;
