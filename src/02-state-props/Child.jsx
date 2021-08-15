import React, { Component } from "react";

// export default class extends Component {
//     render() {
//         return (
//             <div>Child: {this.props.title}</div>
//         )
//     }
// }

// 函数式组件/无状态组建
export default function Child(props) {
    return (
        <>
            <div>Child: {props.title}</div>
            {props.children}
        </>
    )
}

Child.defaultProps = {
    title: "default valve"
}