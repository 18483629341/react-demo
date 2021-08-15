import React from "react";

export default (props) => {
    return (
        <div onClick={props.onReceiveData.bind(this, 'hello')}>Child1</div>
    )
}