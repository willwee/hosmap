import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, StyleSheet,Alert} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { ENTRIES1, ENTRIES2 } from './entries';
import SliderEntry from './SliderEntry';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';

export default class Home extends Component {
  constructor(props){
    super(props);
    this._onPressEvent = this._onPressEvent.bind(this);

    this.state ={
        textArea1Flag : false,
        title:'',
        subTitle:'',
    }
  }

    getSlides (entries) {
        if (!entries) {
            return false;
        }

        return entries.map((entry, index) => {
            return (
                <SliderEntry
                    key={`carousel-entry-${index}`}
                    even={(index + 1) % 2 === 0}
                    onPressEvent ={(title,subTitle) => this._onPressEvent(title,subTitle)}
                    {...entry}
                />
            );
        });
    }
    _onPressEvent(title,subTitle){
      console.log('>>>>>>>>>>>>>>>>>>>>>_onPressEvent',title,subTitle);
        this.setState(
            {
                textArea1Flag:true,
                title:title,
                subTitle:subTitle,
            }
        )
    }

  render() {

      let textArea1 = this.state.textArea1Flag ?  (<View style={styles.textArea1Style}>
              <Text style={[styles.title,this.props.titleStyle]}>{this.state.title}</Text>
              <Text style={[styles.defaultTitle,this.props.defaultTitleStyle]}>{this.state.subTitle}</Text>
          </View> ) : null;
    return (
        <View style={styles.container}>
            <View style={styles.carousel}>
            <Carousel
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                enableMomentum={true}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={2500}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContainer}
                showsHorizontalScrollIndicator={false}
                snapOnAndroid={true}
                removeClippedSubviews={false}
            >
                { this.getSlides(ENTRIES2) }
            </Carousel>
            </View>
            <View  style={{backgroundColor:'#ddd',height:StyleSheet.hairlineWidth}} />
            {textArea1}
        </View>
    );
  }
}

const styles = StyleSheet.create({
    textArea1Style:{
        flexDirection:'column',marginTop:25,marginLeft:10,marginRight:10
    },
    title:{ fontFamily: 'Cochin',fontSize: 20, fontWeight: 'bold',},
    defaultTitle:{marginTop:10,color:'#999999'},
    container:{
        flex: 1,
        backgroundColor: 'white',
},
    carousel:{
        paddingTop: 5
    },
  text:{lineHeight:100, textAlign:'center'},
  button:{marginTop:10,height:34,borderColor:'#ccc',borderWidth:0.5,backgroundColor:'#fff',borderRadius:2, justifyContent:'center',alignItems:'center',marginLeft:10, marginRight:10},
  buttonText:{color:'#444'},  
});
