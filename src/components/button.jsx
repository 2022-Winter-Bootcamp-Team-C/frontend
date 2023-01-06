import React from "react";
import "./button.css";

export default class Eaxmple extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {

    return <div>

        <button onClick={this.changeText}>시작하기</button>

    </div>;
  }
}