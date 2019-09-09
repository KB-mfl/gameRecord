import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import preprocess from './preprocess'
import { Spin } from 'antd'
import store from "store";

ReactDOM.render((
    <Spin size="large">
        <div style={{ width: '100%', height:'100vh'}}/>
    </Spin>
),document.getElementById('root'));

const LoginUser = ['admin', 'tourist'];

// preprocess().then(() => {
//     ReactDOM.render(<App/>, document.getElementById('root'));
// }).catch(() => {
// });
ReactDOM.render(<App/>, document.getElementById('root'));
