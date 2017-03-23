import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet,Image} from 'react-native';

export default class Page1 extends Component {

    constructor(props, context) {
        super(props, context);
    }

  render() {
        console.log('>>>>>>>>>>>>>>>render',this.props.routerData);
      let icon = this.props.routerData.dataSource.icon?<Image style={[styles.icon,this.props.iconStyle]} source={this.props.routerData.dataSource.icon}/>:null;
      let title = this.props.routerData.dataSource.title?<Text style={[styles.title,this.props.titleStyle]}>{this.props.routerData.dataSource.title}</Text>:null;
      let subtitle = this.props.routerData.dataSource.subtitle?<Text style={[styles.defaultTitle,this.props.defaultTitleStyle]}>{this.props.routerData.dataSource.subtitle}</Text>:null;
      let telphone = this.props.routerData.dataSource.tel?<Text style={[styles.defaultTitle,this.props.defaultTitleStyle]}>{this.props.routerData.dataSource.tel}</Text>:null;
      let address = this.props.routerData.dataSource.address?<Text style={[styles.defaultTitle,this.props.defaultTitleStyle]}>{this.props.routerData.dataSource.address}</Text>:null;
    return (
      <View style={styles.container}>
        <ScrollView>
            <View>
                {icon}
                <View style={{flexDirection:'column'}}>
                    {title}
                    {telphone}
                    {address}
                    {subtitle}
                </View>
            </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{lineHeight:100, textAlign:'center'},
    container: {
        flex: 1,
        marginHorizontal:5,
        backgroundColor:'#fff',
    },
    icon:{margin:10,height:250},
    title:{margin:10,fontWeight: 'bold'},
    defaultTitle:{margin:10,color:'#999999'},
    disclosureText:{color:'#999999',fontSize:14},
});
