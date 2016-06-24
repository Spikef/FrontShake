import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    StatusBar,
    TouchableOpacity
} from 'react-native';


export default class Index extends Component {
    constructor() {
        super();
    }

    setUrl(text) {
        AppData.url = text;
    }

    jump(page, title, data) {
        this.props.navigator.push({
            id: page,
            title: title,
            data: data
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>
                    请输入网址
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='http://'
                    defaultValue={AppData.url}
                    onChangeText={this.setUrl}
                    autoCapitalize='none' />
                <TouchableOpacity onPress={() => this.jump('webview', '浏览器', {url: AppData.url})}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>进入页面 >></Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
        paddingHorizontal: 20,
        paddingTop: 200
    },
    label: {
        fontSize: 14,
        color: '#333333',
        marginBottom: 15
    },
    input: {
        fontSize: 14,
        height: 15
    },
    button: {
        marginTop: 25
    },
    buttonText: {
        fontSize: 24
    }
});

module.exports = Index;