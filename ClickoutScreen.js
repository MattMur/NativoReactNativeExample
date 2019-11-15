import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from "react-native-webview";


export class ClickoutScreen extends Component {

    static navigationOptions = {
        title: 'Sponsored Content',
    };

    render() {
        const {navigation} = this.props;
        return (
            <WebView style={styles.container} javaScriptEnabled={true}
                     domStorageEnabled={true} scalesPageToFit={false} useWebKit={true} 
                     source={{uri: navigation.getParam('articleUrl', "google.com")}}/>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default ClickoutScreen;