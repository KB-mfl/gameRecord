import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Auth from './Auth/index'
import preprocess from './preprocess'
import { Spin } from 'antd'
import store from "store";

ReactDOM.render((
    <Spin size="large">
        <div style={{ width: '100%', height:'100vh'}}/>
    </Spin>
),document.getElementById('root'));

const LoginUser = ['admin', 'tourist'];
const Login = window.location.pathname.split('/')[1]
// preprocess().then(() => {
//     ReactDOM.render(<App/>, document.getElementById('root'));
// }).catch(() => {
// });
if (Login==='login' || Login==='register' || Login==='forgot'){
    ReactDOM.render(<Auth/>,document.getElementById('root'))
}else
    ReactDOM.render(<App/>, document.getElementById('root'));
