import React, { Component } from "react";

class state extends Component {
    // 方式一：构造函数
    // constructor(props) {
    //     //调用父类构造函数
    //     super(props)
    //     this.state = {
    //         isShow: false
    //     }
    // }
    // 方式二：属性
    state = {
        isShow: true,
        count: 0,
        list: ['a', 'b', 'c']
    }
    render() {
        return (
            <div>
                {
                    // this.state.isShow ? <div>state </div> : null
                    this.state.isShow && <div>state </div>
                }
                <b>{this.state.count}</b>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    componentDidMount() {
        // setTimeout(function () {
        //     // this.state.isShow = !this.state.isShow
        //     // this.setState({
        //     //     isShow: !this.state.isShow
        //     // })
        //     this.setState(prevState => {
        //         return {
        //             isShow: !prevState.isShow
        //         }
        //     })
        // }, 3000)

        // setTimeout(() => {
        //     this.setState(
        //         prevState => {
        //             return {
        //                 // isShow: !prevState.isShow
        //                 count: prevState.count + 1
        //             }

        //         },
        //         // 之变化后，且渲染成功执行回调
        //         () => {
        //             console.log(document.querySelector('#root').innerHTML)
        //         }
        //     )
        // }, 2000);


        setTimeout(() => {
            this.state.list.push('d');
            this.setState({});
            // this.forceUpdate();此方法会有一些副作用，会跳过一些勾子
            // this.setState({
            //     list: []
            // })
        }, 2000);

    }
}

export default state