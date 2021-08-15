import React, { Component } from "react";

import Child1 from './Child1'
import Child2 from './Child2'
export default class extends Component {
    handleReceiveData(data) {
        console.log(data);
    }
    render() {
        return (
            <>
                <Child1 onReceiveData={this.handleReceiveData}></Child1>
                <Child2 ></Child2>
            </>
        )
    }
}
