import React, { Component } from "react";
import PropTypes from "prop-types";

let {
    string,
    instanceOf
} = PropTypes

class AAA extends Component {
    render() {
        return (
            <div>aaa</div>
        )
    }
}

class Child extends Component {
    static propTypes = {
        // title: string
        title: PropTypes.instanceOf(AAA)
    }
    render() {
        console.log(this.props.title);
        return (
            <div>
                Child {this.props.title} <br />
                {this.props.obj.x}
            </div>
        )
    }
}


let aaa = new AAA()
export default class extends Component {
    render() {
        return (
            <div>
                <Child title={0} obj={{ x: '1' }}></Child>
                <Child title={<div>div</div>} obj={{ x: '2' }}></Child>
                <Child title={aaa} obj={{ x: '3' }}></Child>
            </div>
        )
    }
}