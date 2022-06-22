import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Druva",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA ComponentDidMout");
  }

  shouldComponentUpdate() {
    console.log("LifecylceA ShouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Jeevini",
    });
  };

  render() {
    console.log("LifecycleA Render");
    return (
      <div>
        <div>LifecycleA5</div>
        <button onClick={this.changeState}>changeState</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
