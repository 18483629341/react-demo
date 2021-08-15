import React, { Component } from "react";

import store from './store'

export default class App extends Component {

    render() {
        return (
            <div>
                <button onClick={store.dispatch.bind(this, { type: 'increment' })}>+</button>
                <div id="count"></div>
                <button onClick={store.dispatch.bind(this, { type: 'decrement' })}>-</button>
            </div>
        )
    }

    componentDidMount() {

        store.dispatch()
    }
}
