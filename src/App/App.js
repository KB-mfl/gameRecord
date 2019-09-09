import React from 'react';
import { Layout, Icon, Button,Avatar} from 'antd';
import LeftMenu from './LeftMenu';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import GameList from "../Component/GameList";
import GameRecord from "../Component/GameRecord";
import HomePage from "../Component/HomePage";
import './App.less';
const { Header, Footer, Sider, Content } = Layout;
class App extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return(
        <BrowserRouter>
          <Layout style={{minHeight: '100vh'}}>
            <LeftMenu/>
            <Layout>
              <Content style={{margin: '10px 10px', padding: 20, background: '#fff'}}>
                <Switch>
                  <Route exact path="/user" component={() =><Redirect to="/user/homePage"/>}/>
                  <Route path='/user/homepage' component={HomePage}/>
                  <Route path='/user/gameList' component={GameList}/>
                  <Route path='/user/gameRecord' component={GameRecord}/>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </BrowserRouter>
    )
  }
}
export default App;
