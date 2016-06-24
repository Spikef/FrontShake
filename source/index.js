import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator
} from 'react-native';

global.AppData = {};

AppData.Views = {
    webview: require('./webview'),
    setting: require('./setting')
};

AppData.url = '';

export default class Index extends Component {
    renderScene(router, navigator) {
        var PageView = null;

        switch(router.id){
            case 'webview':
                PageView = AppData.Views.webview;
                break;
            default:
                PageView = AppData.Views.setting;
        }

        return <PageView navigator={navigator} title={router.title} data={router.data} />
    }
    
    render() {
        return (
            <Navigator
                initialRoute={{id: 'default'}}
                renderScene={this.renderScene}
                style={{backgroundColor: '#455B62'}}
            />
        );
    }
}

module.exports = Index;