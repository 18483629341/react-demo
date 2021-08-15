import React, { Component, createRef } from "react";

export default class extends Component {
    constructor(props) {
        super(props)
        this.ipt = createRef()
    }



    state = {
        textValue: "hello"
    }
    handleChange(e) {
        this.setState({
            textValue: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input value={this.state.textValue} onChange={this.handleChange.bind(this)} type="text" />
                <p>非受控组件</p>
                < input type="text" ref={this.ipt} />
            </div>
        )
    }
}
