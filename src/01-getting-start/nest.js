import React, { Component, createElement, Fragment } from "react";

class Header extends Component {
    render() {// render 函数必须要是实现
        return (
            <div>Header</div>
        )
    }
}
class Content extends Component {
    render() {// render 函数必须要是实现
        return (
            <div>Content</div>
        )
    }
}
// babel  (create-react-app内含)
class App extends Component {
    render() {// render 函数必须要是实现
        return (
            // createElement(
            //     Fragment,
            //     null,
            //     createElement(
            //         Header
            //     ),
            //     createElement(
            //         Content
            //     )
            // )
            <>
                <Header></Header>
                <Content></Content>
            </>
        )
    }
}

export default App