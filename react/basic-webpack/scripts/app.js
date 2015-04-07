"use strict";

import React from "react";
import Menu from "./menu";

export default class App extends React.Component {
    render() {
        return (
            <div>
              <h1>Hola, {this.props.name}!</h1>
              <Menu />
            </div>
        );
    }
}
