import { Component } from "react";
import { GoogleLogout } from "react-google-login";

export default class LogOut extends Component {
    constructor(props) {
        super(props);
        this.clientid = '36885881628-rpr2jcd4eqtvbm0d8nigag9pch2gbl72.apps.googleusercontent.com';
    }
    logoutSuccess = () => {
        alert('Logout success!');
        window.location.reload(true);
    }
    render() {
        return (
            <div id="signOutButton">
                <GoogleLogout
                    clientId={this.clientid}
                    buttonText="Logout with google"
                    onLogoutSuccess={this.logoutSuccess}
                />
            </div>
        );
    }
}