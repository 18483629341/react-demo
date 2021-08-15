import React, { Component } from "react";
import Child from './Child'

export default class extends Component {
    // initialization
    // 最先执行，只执行一次，一定会执行
    constructor(props) {
        super(props)
        this.state = {
            x: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    // mounting，
    UNSAFE_componentWillMount() {
        console.log('UNSAFE_componentWillMount')
    }
    // componentWillReceivePropsV16.3以前支持
    // componentWillReceiveProps() {

    // }
    handleClick() {

    }

    render() {
        // 父组件render执行，子组件render一定执行
        console.log('RENDER')
        return (
            <>
                <div>app {this.state.x}</div>
                <Child title='hello' />
            </>

        )
    }

    componentDidMount() {
        console.log('componentDidMount')
        setTimeout(() => {
            // ajax推荐放在此处
            this.setState({
                x: new Date().getTime()
            })
        }, 2000)

    }

}
