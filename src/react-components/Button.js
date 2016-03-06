'use strict';
import React, {
    StyleSheet,
    PropTypes,
    Component,
    TouchableWithoutFeedback,
    Text,
    View,
} from 'react-native';

const colorStyle = {
    default: {
        default: {
            View: {
                backgroundColor: '#fff',
                borderColor: '#ccc',
            },
            Text: { color: '#333' }
        },
        active: {
            View: {
                backgroundColor: '#e6e6e6',
                borderColor: '#adadad',
            },
            Text: { color: '#333' }
        }
    },
    primary: {
        default: {
            View: {
                backgroundColor: '#337ab7',
                borderColor: '#2e6da4',
            },
            Text: { color: '#fff' }
        },
        active: {
            View: {
                backgroundColor: '#286090',
                borderColor: '#204d74',
            },
            Text: { color: '#fff' }
        }
    },
    info: {
        default: {
            View: {
                backgroundColor: '#5bc0de',
                borderColor: '#46b8da',
            },
            Text: { color: '#fff' }
        },
        active: {
            View: {
                backgroundColor: '#31b0d5',
                borderColor: '#269abc',
            },
            Text: { color: '#fff' }
        }
    },
    success: {
        default: {
            View: {
                backgroundColor: '#5cb85c',
                borderColor: '#4cae4c',
            },
            Text: { color: '#fff' }
        },
        active: {
            View: {
                backgroundColor: '#449d44',
                borderColor: '#398439',
            },
            Text: { color: '#fff' }
        }
    },
    warning: {
        default: {
            View: {
                backgroundColor: '#f0ad4e',
                borderColor: '#eea236',
            },
            Text: { color: '#fff' }
        },
        active: {
            View: {
                backgroundColor: '#ec971f',
                borderColor: '#d58512',
            },
            Text: { color: '#fff' }
        }
    },
    danger: {
        default: {
            View: {
                backgroundColor: '#d9534f',
                borderColor: '#d43f3a',
            },
            Text: { color: '#fff' }
        },
        active: {
            View: {
                backgroundColor: '#c9302c',
                borderColor: '#ac2925',
            },
            Text: { color: '#fff' }
        }
    }
};



class Button extends Component {

    getNewState (props) {

        var { type, style, ...attrs} = props;

        return {
            label: (this.props.children || '').toString(),
            type: props.type || 'default',
            active: false,
            attrs,
            ViewStyles: {
                borderWidth: 1,
                borderStyle: 'solid',
                padding: 20,
                borderRadius: 5
            },
            TextStyles: {
                alignSelf: 'center',
            },
        }
    }

    constructor (props) {
        super(props);

        this.state = this.getNewState(props);
    }

    componentWillReceiveProps(props) {
        this.setState(this.getNewState(props));
    }

    onPress () {
        this.props.onClick && this.props.onClick();
    }

    render () {
        var { active, type, attrs } = this.state;
        var styles = active ? colorStyle[type].active : colorStyle[type].default;

        var ViewStyles = Object.assign({}, this.state.ViewStyles, styles.View);
        var _attrs = Object.assign({}, attrs);
        _attrs.style = Object.assign(
            {}, 
            this.state.TextStyles, 
            styles.Text, 
            attrs.style || {}
        );

        return (
            <TouchableWithoutFeedback 
                onPressIn={() => this.setState({ active: true })}
                onPressOut={() => this.setState({ active: false })}
                onPress={this.onPress.bind(this)}>
                <View style={ViewStyles}>
                    <Text {..._attrs} >
                        {this.props.children}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

Button.propTypes = {
    children: PropTypes.string,
    type: PropTypes.oneOf(['', 'default', 'primary', 'info', 'success', 'warning', 'danger']),
    onClick: PropTypes.func,
}


export default Button;