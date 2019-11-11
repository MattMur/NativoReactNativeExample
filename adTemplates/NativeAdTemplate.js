import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const NativeAdTemplate = (props) => {
    return (
        <View style={styles.nativeCard}>
            <Text style={{color: '#1A1AFF', fontSize: 11, marginBottom: 5 }}>Sponsored Content</Text>
            <Text style={styles.title}>{props.adTitle}</Text>
            <Text numberOfLines={2} multiline={true} style={{textAlign: 'center', height: 50}}>{props.adDescription}</Text>
            <View style={styles.authorView}>
                <Image nativeID={'authorImage'} style={styles.authorImage} />
                <Text>By {props.adAuthorName}</Text>
            </View>
            <Image nativeID={'articleImage'} style={styles.articleImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    nativeCard: {
        borderWidth: 2,
        borderColor: '#23c9f5',
        flex: 1,
        padding: 10,
        elevation: 1
    },
    title: {
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 5
    },
    authorView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    articleImage: {
        width: "100%",
        height: 150
    },
    authorImage: {
        width: 50,
        height: 20,
        marginBottom: 10,
        marginRight: 10
    }
});

export default NativeAdTemplate;