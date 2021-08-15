import React, { Component } from "react";
import classNames from 'classnames/bind';
import styles from './style.css'
import { StyleContainer } from './styleContainer.js'

// const styles = {
//     fontSize: '30px',
//     color: red
// }


let cx = classNames.bind(styles)


class classStyles extends Component {
    render() {// render 函数必须要是实现
        let className = cx({
            font: true
        })
        return (
            <>
                <div className={className} >hello2</div>
                <StyleContainer>world</StyleContainer>
            </>
        )
    }
}

export default classStyles