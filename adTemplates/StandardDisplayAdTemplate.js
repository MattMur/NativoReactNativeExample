import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {WebView} from "react-native-webview";
import { NativoWebContent } from 'react-native-nativo-ads';

const StandardDisplayAdTemplate = (props) => {
    console.log("StandardDisplay props: "+ JSON.stringify(props));
    return (
        <View style={styles.nativeCard}>
            <NativoWebContent style={{width: props.displayWidth, height: props.displayHeight, alignSelf: 'center', alignContent: 'center'}} />
        </View>
    );
}

// <View nativeID={'nativoAdWebView'} style={{width: props.displayWidth, height: props.displayHeight, alignSelf: 'center', alignContent: 'center'}}></View>
// <WebView nativeID={'nativoAdWebView'} scalesPageToFit={false} style={{width: 300, height: 250, alignSelf: 'center'}}/>

const styles = StyleSheet.create({
    nativeCard: {
        borderWidth: 2,
        borderColor: '#23c9f5',
        padding: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default StandardDisplayAdTemplate