import React from "react";
import Login from "./login";
import LogOut from "./logout";
import { gapi } from "gapi-script";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.clientid =
      "36885881628-rpr2jcd4eqtvbm0d8nigag9pch2gbl72.apps.googleusercontent.com";
  }
  componentDidUpdate() {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId: this.clientid,
      });
    });
  }
  render() {
    return (
      <div className="gap-8">
        <Login />
        <LogOut />
      </div>
    );
  }
}
