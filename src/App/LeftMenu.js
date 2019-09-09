import React from 'react'
import { Menu, Icon, Layout, Avatar, Badge} from 'antd'
import { withRouter, Link} from 'react-router-dom'
import store from 'store'
class LeftMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            collapsed:store.get('collapsed') || false,
        };
        this.leftMenuList = [
            {key: 'homepage',title:'首页',icon:'key'},
            {key: 'gameList', title: '游戏下载', icon: 'notification'},
            {key: 'gameRecord', title:'下载流量记录', icon:'notification'}

        ];
    }
    componentDidMount() {
    }
    getDefaultKey = () => {
        let sider = this.leftMenuList.find(o => window.location.pathname.match(o.key)) || {};
        return sider.key;
    };
    render() {
        return (
            <Layout.Sider
                theme="dark"
            >
                <div className="logo">中秋游戏管理平台</div>
                <Menu theme="dark" mode="inline" className="LeftItem" defaultSelectedKeys={[this.getDefaultKey()]}>
                    <Menu.Item key='homepage'>
                        <Link to='/user/homepage'/>
                        <Icon type='key'/>
                        <span>首页</span>
                    </Menu.Item>
                    <Menu.Item key='gameList'>
                        <Link to='/user/gameList'/>
                        <Icon type='user'/>
                        <span>游戏列表</span>
                    </Menu.Item>
                    <Menu.Item key='gameRecord'>
                        <Link to='/user/gameRecord'/>
                        <Icon type='user'/>
                        <span>下载流量记录</span>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
        )
    }
}
export default LeftMenu
