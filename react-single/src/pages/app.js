import { Button } from 'antd';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './app.scss';
//import {Button} from 'antd';
//import 'antd/dist/antd.css'

export default function App(){
    const [count, setCount] = useState(9);
    useEffect(()=>{
        console.log("100");
        setCount(100);
    });
    return <div className="container">
        <h1>Tan</h1>
        <Link to="/login">点击跳转登录页面</Link>
        <br/>
        <Link to="/home">点击跳转主页面</Link>
        <br/>
        <Link to="/detail">ddddd</Link>
        <p>
            当前count次数:{count}
        </p>
        <Button onClick={()=>{setCount(count+1)}}>更新次数</Button>
    </div>
}
// export default class App extends React.Component{
//     handleJump = ()=>{
//         this.props.history.push('./login');
//     }
//     render(){
//         return <div class="container">
//         <h1>Tan</h1>
//         <Link to="/login">点击跳转登录页面</Link>
//         <br/>
//         <Link to="/home">点击跳转主页面</Link>
//         <br/>
//         <Button onClick={this.handleJump}>跳转登录</Button>
//     </div>        
//     }
// }