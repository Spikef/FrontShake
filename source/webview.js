import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    WebView,
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import RNShakeEventIOS from 'react-native-shake-event-ios';

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.canGoBack = false;
    }

    componentWillMount() {
        RNShakeEventIOS.addEventListener('shake', () => {
            this.reload();
        });
    }

    componentWillUnmount() {
        RNShakeEventIOS.removeEventListener('shake');
    }

    onNavigationStateChange(e) {
        this.canGoBack = e.canGoBack;
    }

    onBackButtonPress() {
        if ( this.canGoBack ) {
            this.refs.web.goBack();
        } else {
            this.props.navigator.pop()
        }
    }

    reload() {
        this.refs.web.reload();
    }

    renderLoading() {
        return (
            <View style={styles.webView}>
                <ActivityIndicator size='large' color='#1B9F92' />
            </View>
        )
    }

    renderError(domain, code, description) {
        return (
            <View style={styles.webView}>
                <TouchableOpacity style={styles.errorBox} onPress={this.reload}>
                    <Text style={styles.errorTitle}>出错, 请点此重试</Text>
                    <Text style={styles.errorText}>{'错误信息: ' + description}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <WebView
                ref='web'
                style={styles.webView}
                bounces={false}
                javaScriptEnabled={true}
                renderError={this.renderError}
                renderLoading={this.renderLoading}
                onNavigationStateChange={this.onNavigationStateChange}
                startInLoadingState={true}
                scalesPageToFit={true}
                source={{uri: this.props.data.url}}
            />
        );
    }
}

const styles = StyleSheet.create({
    webView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width
    },
    errorBox: {
        width: Dimensions.get('window').width * 0.8,
        padding: 10,
        backgroundColor: '#242424',
        marginTop: -100
    },
    errorTitle: {
        flex: 1,
        fontSize: 18,
        color: '#DDD',
        marginBottom: 10,
        textAlign: 'center'
    },
    errorText: {
        flex: 1,
        fontSize: 14,
        color: '#FFF',
        textAlign: 'center'
    }
});

module.exports = Index;