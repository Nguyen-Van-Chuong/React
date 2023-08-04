import { Component } from "react";
import { GoogleLogin } from "react-google-login";
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.clientid = '36885881628-rpr2jcd4eqtvbm0d8nigag9pch2gbl72.apps.googleusercontent.com';
        this.state = { user: '' }
    }
    loginThanhCong = (res) => {
        this.setState({ user: res.profileObj.email });
    }
    render() {
        if (this.state.user !== '') {
            return (
                <b>{this.state.user}</b>
            );
        } else {
            return (
                <div id="signInButton">
                    <GoogleLogin
                        clientId={this.clientid}
                        onSuccess={this.loginThanhCong}
                        buttonText="Login with google"
                        isSignedIn={true}
                    />
                </div>
            );
        }
    }
}