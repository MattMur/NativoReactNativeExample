/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { NativeModules, FlatList, Platform, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import NativoAd from 'react-native-nativo-ads';
import NativeAdTemplate from "./adTemplates/NativeAdTemplate";
import VideoAdTemplate from "./adTemplates/NativeVideoAdTemplate";
import StandardDisplayAdTemplate from "./adTemplates/StandardDisplayAdTemplate";
import LandingPageTemplate from "./adTemplates/LandingPageAdTemplate";

export default class App extends Component {
  render() {
    let data = [
      { key: 'Matt' },
      { key: 'Dan' },
      { key: 'Dominic' },
      { key: 'Jackson' },
      { key: 'James' },
      { key: 'Joel' },
      { key: 'John' },
      { key: 'Jillian' },
      { key: 'Greg' },
      { key: 'Julie' },
    ];
    
    // Init NativoSDK
    let NativoSDK = NativeModules.NativoSDK;

    NativoSDK.enableDevLogs();
    //NativoSDK.enableTestAdvertisementsWithType(NativoSDK.AdTypes.NATIVE);
    NativoSDK.enableTestAdvertisements();
    //NativoSDK.prefetchAdForSection("pub.com", "7");

    // Register Templates
    NativoSDK.registerTemplateComponent("NativeAdTemplate", NativeAdTemplate);
    NativoSDK.registerTemplateComponent("VideoAdTemplate", VideoAdTemplate);
    NativoSDK.registerTemplateComponent("StandardDisplayAdTemplate", StandardDisplayAdTemplate);
    NativoSDK.registerTemplateComponent("LandingPageTemplate", LandingPageTemplate);

    let itemRender = (props) => {

      let isNativoAd = props.index === 2 || props.index === 5 || props.index === 8;

      let displayLandingPage = (event) => {
        console.log("Printing ad data:");
        console.log(JSON.stringify(event.nativeEvent));
      };

      let NativoAdUnit = (<NativoAd sectionUrl={"pub.com"} 
                                    locationId={props.index.toString()} 
                                    nativeAdTemplate={"NativeAdTemplate"}
                                    videoAdTemplate={"VideoAdTemplate"}
                                    style={{ width: "100%", height: 350 }} />);

      let ArticleUnit = (<View>
                  <Text style={styles.title}>
                    News Article
                  </Text>
                  <View style={styles.authorView}>
                    <Image source={{ uri: "https://www.logolynx.com/images/logolynx/6a/6aa959dca0e6c62f593e94e02332a67f.jpeg" }}
                      style={styles.authorImage} />
                    <Text>By {props.item.key}</Text>
                  </View>
                  <Image source={{ uri: "https://images.unsplash.com/photo-1527664557558-a2b352fcf203?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4341976025ae49162643ccdb47a72a4d&w=300&q=80" }}
                    style={styles.articleImage} />
                </View>);

      let onArticleClick = () => this.props.navigation.navigate('LandingPage')

      return (
        <View style={styles.item}>
          <TouchableHighlight onClick={onArticleClick}>
            { isNativoAd ? NativoAdUnit : ArticleUnit }
          </TouchableHighlight>
        </View>
      );
    }
  

  return(
      <View style = { styles.container } >
        <Text style={styles.welcome}>☆NativoAds example☆</Text>
        <FlatList data={data} renderItem={itemRender} style={styles.list} />
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9c9c9',
  },
  list: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    flex: 1
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
  },
  item: {
    padding: 10,
    backgroundColor: "white",
    margin: 10
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
    height: 110
  },
  authorImage: {
    width: 50,
    height: 20,
    marginBottom: 10,
    marginRight: 10
  }
});
