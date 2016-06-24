/**
 * Usage: 加载状态效果
 * Author: Spikef < Spikef@Foxmail.com >
 * Copyright: Envirs Team < http://envirs.com >
 */

var React = require('react');
var ReactNative = require('react-native');

var {
    PropTypes
} = React;

var {
    View,
    ActivityIndicator,
    ProgressBarAndroid,
    Platform,
} = ReactNative;

var spinner = React.createClass({
    propTypes: {
        color: PropTypes.string,
        size: PropTypes.oneOf(['small', 'large'])
    },
    getDefaultProps: function() {
        return {
            color: 'grey',
            size: 'small'
        }
    },
    renderActivity: function() {
        return (
            <ActivityIndicator
                animating={true}
                size={this.props.size}
                color={this.props.color}
            />
        )
    },
    renderProgress: function() {
        var style = this.props.size === 'small' ? 'SmallInverse' : 'LargeInverse';

        return (
            <ProgressBarAndroid
                styleAttr={style}
                color={this.props.color}
            />
        )
    },
    render: function() {
        return (
            <View>
                { Platform.OS === 'ios' ? this.renderActivity() : this.renderProgress() }
            </View>
        );
    }
});


module.exports = spinner;