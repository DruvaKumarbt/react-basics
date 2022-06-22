import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    //SHORT CIRCUIT Approach
    return this.state.isLoggedIn && <div>Welcome Druva</div>;
    //   //TERNARY Approach
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Druva</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    //MESSAGE VARIABLE Approach
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Druva</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }

    // return <div>{message}</div>;

    //IF-ELSE Approach
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Druva</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // return (
    //   <div>
    //     <div>Welcome Druva</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
