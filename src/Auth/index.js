import React from 'react'
import { Menu } from 'antd';
import './index.less'
import Login from './Login'
import Register from './Register'
import ForgotPassword from './ForgotPassword'
import { Route, Switch, Redirect,BrowserRouter,Link} from "react-router-dom";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: window.location.pathname.split('/')[1]
        }
    }

    componentDidMount() {
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Menu
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        className="tabs"
                    >
                        <Menu.Item key="register" className="register" onClick={this.handleClick}><Link to="/register"/>注册</Menu.Item>
                        <Menu.Item key="login" className="login" onClick={this.handleClick}><Link to="/login"/>登陆</Menu.Item>
                    </Menu>
                    <div className="form-container">
                        <Switch>
                            <Route exact path='/' component={()=><Redirect to={this.state.current}/>}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/register' component={Register}/>
                            <Route path='/forgot' component={ForgotPassword}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default Layout
