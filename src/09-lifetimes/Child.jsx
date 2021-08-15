import React, { Component, PureComponent } from "react";

export default class extends PureComponent {

    // updating  父组件setState后会调用
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
        console.log(nextProps)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return !(this.props.title === nextProps.title)
    // }
    render() {
        console.log('render')
        return (
            <>
                child
            </>

        )
    }



}
