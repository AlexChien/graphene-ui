import React from "react";
import Identicon from "./Identicon";
import {PropTypes, Component} from "react";

class AccountImage extends Component {
    render() {
        let {account, image} = this.props;
        let {height, width} = this.props.size;
        let custom_image = image ?
            <img src={image} height={height + "px"} width={width + "px"}/> :
            <Identicon id={account} account={account} size={this.props.size}/>;

        return (
            <div>
                {custom_image}
            </div>
        );
    }
}

AccountImage.propTypes = {
    src: PropTypes.string,
    account: PropTypes.string.isRequired,
    size: PropTypes.object.isRequired
};

export default AccountImage;
