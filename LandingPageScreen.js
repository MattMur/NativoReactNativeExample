import React, {Component} from 'react';
import {findNodeHandle, NativeEventEmitter, StyleSheet, View, Text, Image, ScrollView, NativeModules} from 'react-native';
import {WebView} from "react-native-webview";


export class LandingPageScreen extends Component {

    static navigationOptions = {
        title: 'Sponsored Content',
    };
    
    constructor() {
        super();
        this.state = {  
            webStyle: {
                height: 800
            }     
        };
    }

    componentDidMount() {
        if (this.props.navigation.getParam('isNativoAd')) {
            let NativoSDK = NativeModules.NativoSDK;
            const rootTag = findNodeHandle(this.refs.landingPage);
            const sectionUrl = this.props.navigation.getParam('sectionUrl');
            const locationId = this.props.navigation.getParam('locationId');
            const shouldScroll = false;
            const nativoEvents = new NativeEventEmitter(NativoSDK);

            this.handleExternalLink = nativoEvents.addListener('landingPageLinkClick', (event) => {
                this.props.navigation.navigate("ClickoutPage", { articleUrl: event.url });
            });

            this.handleFinishLoad = nativoEvents.addListener('landingPageFinishLoading', (event) => {
                if (event.error) {
                    console.log("There was an error: " + event.error);
                } else {
                    this.setState({  
                        webStyle: {
                            height: event.contentHeight
                        }     
                    });
                }
            });

            NativoSDK.injectLandingPage(rootTag, sectionUrl, locationId, shouldScroll);
        }   
    }

    componentWillUnmount() {
        this.handleExternalLink && this.handleExternalLink.remove();
        this.handleFinishLoad && this.handleFinishLoad.remove();
    }

    render() {
        const {navigation} = this.props;
        return (
            <ScrollView ref='landingPage' style={styles.container}>
                <Text style={styles.title}>{navigation.getParam('title')}</Text>
                <View style={styles.authorView}>
                    <Image nativeID={'authorImage'} style={styles.authorImage} />
                    <Text style={styles.authorName}>By {navigation.getParam('authorName')}</Text>
                </View>
                <WebView nativeID={'nativoAdWebView'} javaScriptEnabled={true} style={this.state.webStyle} automaticallyAdjustContentInsets={false} 
                    domStorageEnabled={true} scalesPageToFit={false} useWebKit={true} 
                    source={{uri: navigation.getParam('articleUrl')}}/>
            </ScrollView>
        )
    }
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        margin: 10
    },
    authorName: {
        fontSize: 18
    },
    authorImage: {
        width: 50,
        height: 50
    },
    authorView: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
});

export default LandingPageScreen;