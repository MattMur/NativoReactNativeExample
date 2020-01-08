import React, {Component} from 'react';
import {findNodeHandle, NativeEventEmitter, StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {WebView} from "react-native-webview";
import { NativoWebContent } from 'react-native-nativo-ads';


export class LandingPageScreen extends Component {

    static navigationOptions = {
        title: 'Sponsored Content',
    };

    organicFinishLoad = (syntheticEvent) => {
        console.log("Organic Finish Landing Page Loading");
    };
    organicOnLoad = (syntheticEvent) => {
        console.log("Organic On Landing Page Loading");
    };
    
    constructor() {
        super();
        this.state = {  
            webStyle: {
                height: 800
            }     
        };
        //this.webViewRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.navigation.getParam('isNativoAd')) {
            // const sectionUrl = this.props.navigation.getParam('sectionUrl');
            // const locationId = this.props.navigation.getParam('locationId');
            // const shouldScroll = false;
            // const nativoEvents = new NativeEventEmitter(NativoSDK);
            // this.handleExternalLink = nativoEvents.addListener('landingPageHandleExternalLink', (event) => {
            //     this.props.navigation.navigate("ClickoutPage", { articleUrl: event.url });
            // });
            // this.handleFinishLoad = nativoEvents.addListener('landingPageDidFinishLoading', (event) => {
            //     if (event.error) {
            //         console.log("There was an error: " + JSON.stringify(event.error));
            //     } else {
            //         this.setState({ webStyle: { height: event.contentHeight } });
            //     }  
            // });
            //NativeModules.NativoSDK.loadSponsoredContent(findNodeHandle(this.webViewRef.current), sectionUrl, locationId, shouldScroll);
        } 
    }

    componentWillUnmount() {
        // this.handleExternalLink && this.handleExternalLink.remove();
        // this.handleFinishLoad && this.handleFinishLoad.remove();
    }

    render() {
        const {navigation} = this.props;
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{navigation.getParam('title')}</Text>
                <View style={styles.authorView}>
                    <Image source={{ uri: navigation.getParam('authorImgUrl') }} style={styles.authorImage} />
                    <Text style={styles.authorName}>By {navigation.getParam('authorName')}</Text>
                </View>
                <NativoWebContent 
                    style={this.state.webStyle} 
                    sectionUrl={navigation.getParam('sectionUrl')} 
                    locationId={navigation.getParam('locationId')} 
                    onClickExternalLink={(event)=> {
                        navigation.navigate("ClickoutPage", { articleUrl: event.url });
                    }} 
                    onFinishLoading={(event)=>{ 
                        if (event.error) {
                            console.log("There was an error: " + JSON.stringify(event.error));
                        } else {
                            this.setState({ webStyle: { height: event.contentHeight } });
                        }
                    }} />
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