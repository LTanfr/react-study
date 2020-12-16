import { Button } from 'antd';
import React from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import './app.scss';
//import {Button} from 'antd';
//import 'antd/dist/antd.css'

export default function Detail(){
    const params = useParams();
    const history = useHistory();
    return <div className="container">
        <p>This is the detail page.</p>
        <p>当前参数为：{params.id}</p>
        <Button onClick={()=>{
            history.push('/');
        }}>跳转首页</Button>
    </div>
}
// export default class Detail extends React.Component{
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