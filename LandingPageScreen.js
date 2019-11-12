import React, {Component} from 'react';
import {findNodeHandle, requireNativeComponent, StyleSheet, UIManager, View, Text} from 'react-native';
import {WebView} from "react-native-webview";

const NativoLandingPageContainer = requireNativeComponent("NativoLandingPageContainer")

export class LandingPageScreen extends Component {

    componentDidMount() {

    }

    static navigationOptions = {
        title: 'My Landing Page',
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{navigation.getParam('title', "Hi")}</Text>
                <Text style={styles.authorName}>By {navigation.getParam('authorName')}</Text>
                <WebView nativeID={'nativoAdWebView'} javaScriptEnabled={true}
                     domStorageEnabled={true} scalesPageToFit={false} useWebKit={true} 
                     source={{uri: navigation.getParam('articleUrl', "google.com")}}/>
            </View>
        )
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 36
    },
    authorName: {
        fontSize: 18
    }
});

export default LandingPageScreen;