import React, { Component } from "react";

import Child from './Child.jsx'
export default class extends Component {
    render() {
        return (
            <>
                <div>data</div>
                <Child title="lii"></Child>
                <Child>
                    <div>slot:props.children</div>
                </Child>
            </>
        )
    }
}

