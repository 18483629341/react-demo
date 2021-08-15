import React, { Component } from "react";

const data = `<h1>hello</h1>`

const Home = () => {
    return (
        <div>home</div>
    )
}

export default class extends Component {

    render() {
        return (
            <>
                <div
                    dangerouslySetInnerHTML={{ __html: data }}
                >

                    {/* <div>{data}</div> */}
                </div>
                <label htmlFor="abc">abc <input type="text" id="abc" /></label>
                {true && <Home></Home>}
            </>

        )
    }
}
