import React from 'react';
import ReactDOM from 'react-dom';
// import ClassStyles from './01-getting-start/classStyles.js'
// import DataMount from './02-state-props/DataMount.jsx'
// import PropTypes from './02-state-props/PropTypes'
// import State from './02-state-props/State'
// import App from './03-state-uplifting/Parent'
// import App from './04-controled-com/App'
// import App from './05-render-data/App'
// import App from './09-lifetimes/App'
import App from './13-redux/App'

// import App from './app'
// let App = (props) => {
//   console.log(props);
//   return <div>hello3 {props.title}</div>
// }

// class App extends ReactDOM.Component {
//   render() {// render 函数必须要是实现
//     return (
//       <div>hello3 {this.props.title}</div>
//     )
//   }
// }


// import App from './01-getting-start/nest'

ReactDOM.render(
  // <App title="!!!"></App>,
  // <div>hello</div>,
  // <ClassStyles />,// 类的实例化
  // <DataMount />,
  // <PropTypes />,
  // <State />,
  <App />,
  document.querySelector('#root')
)