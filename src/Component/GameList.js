import React from 'react'
import {List,Button,message} from "antd";
import httpService from '../service'
export default class GameList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data:[{
                'name':'贪玩蓝月',
                'version':'3.2.1'
            },{
                'name':'NBA2K',
                'version':'3.2.0'
            }],
        }
    }
    componentDidMount() {
        this.fetchGamesList()
    }

    fetchGamesList = () => {
        httpService.get('/game/list').then(r=>{
            this.setState({
                data:r.data
            })
        }).catch(e=>{
            message.error('获取游戏列表失败')
        })
    };

    installGame = (name,version) => {
        const params = {
            name:name,
            version:version
        }
        httpService.get('/game',{params}).then(r=>{
            message.success('正在下载游戏')
        })
    }

    render() {
        return (
            <div>
                <List
                    dataSource={this.state.data}
                    renderItem={(item,index) => (
                        <List.Item key={index}>
                            <List.Item.Meta
                                title={item.name}
                                description={`当前版本${item.version}`}
                            />
                            <Button onClick={this.installGame.bind(this,item.name,item.version)}>下载</Button>
                        </List.Item>
                    )}
                >
                </List>
            </div>
        )
    }
}
