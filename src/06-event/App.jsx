import React, { Component } from "react";

export default class extends Component {

    constructor() {
        super()
        // 只绑定一次(推荐)
        this.handleClick = this.handleClick.bind(this)
    }
    state = {
        count: 0
    }

    handleClick(arg) {
        //方法中需要拿到this,handleClick.bind(this)，
        // 但是此种很耗性能，每bind一次就，创建一次方法
        //事件优化方案：this.handleClick=this.handleClick.bind(this)，<button onClick={this.handleClick}>click</button>
        // console.log(this.state.count)
        // 事件传参：onClick={() => { this.handleClick('xxx') }}  ; handleClick(arg){}
        console.log(arg)
    }

    // todo 事件柯里化(推荐)
    handleClick2 = (arg) => {
        return (event) => {
            console.log(this.state.count)
            console.log(arg)
            console.log(event.target)
        }
    }
    render() {
        return (
            <>
                {/* <button onClick={this.handleClick.bind(this)}>click</button> */}

                {/* <button onClick={this.handleClick}>click</button> */}
                <button onClick={() => { this.handleClick('xxx') }}>click</button>
                <button onClick={this.handleClick2('abc')}>click2</button>
            </>

        )
    }
}
