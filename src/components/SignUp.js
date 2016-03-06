'use strict';

import React, {
    Alert,
    Component,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight 
} from 'react-native';

import UI from '../react-components';

class SignUp extends Component {
    constructor (props) {
        super(props);

        this.state = {
            phone: '',
            name: '',
        };
    }

    onChangePhone (phone) {
        if (/^\d+$/.test(phone) && phone.length <= 10) {
            this.setState({
                phone
            });
        }
    }

    onChangeName (name) {
        this.setState({ name });
    }

    onSignUp() {
        var {phone, name} = this.state;
        Alert.alert(
            '註冊新會員',
            `電話: ${phone} \n姓名: ${name}`,
            [
                {text: 'OK'}
            ]
        );
    }

    render () {
        return (
            <View style={styles.Container}>
                <View style={styles.InputView}>
                    <Text style={styles.InputLabel}>
                        電話
                    </Text>
                    <TextInput
                        style={styles.InputText}
                        keyboardType="phone-pad"
                        onChangeText={this.onChangePhone.bind(this)}
                        value={this.state.phone}/>
                </View>
                <View style={styles.InputView}>
                    <Text style={styles.InputLabel}>
                        姓名
                    </Text>
                    <TextInput
                        style={styles.InputText}
                        onChangeText={this.onChangeName.bind(this)}
                        value={this.state.name}/>
                </View>
                <View style={styles.ButtonView}>
                    <UI.Button
                        type='primary'
                        onClick={this.onSignUp.bind(this)}> 
                        建立新的使用者 
                    </UI.Button>
                </View>
                <View style={styles.ButtonView}>
                    <UI.Button
                        type='info'
                        onClick={this.onSignUp.bind(this)}> 
                        使用帳號登入 
                    </UI.Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 20,
    },
    InputView: {
        flexDirection: 'row',
    },
    InputLabel: {
        flex: 0.3,
        textAlign: 'center',
        alignSelf: 'center',
        textAlignVertical: 'bottom',
    },
    InputText: {
        flex: 0.7,

    },
    ButtonView: {
        marginTop: 20,
    }
})


export default SignUp;