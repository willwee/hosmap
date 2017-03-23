'use strict';

import React, {PropTypes,Component} from 'react';
import {View, StyleSheet, Image,Text, TouchableOpacity} from 'react-native';

class ListCellView extends Component
{
    static defaultProps={
        showDisclosureIndicator:false,
    }
    static PropsType={
        disclosureText:PropTypes.string,
        style:View.prototype.style,
        icon:Image.prototype.source,
        iconStyle:Image.propTypes.style,
        vectoricon:PropTypes.object,
        title:PropTypes.string,
        titleStyle:Text.prototype.style,
        defaultTitle:PropTypes.string,
        defaultTitleStyle:Text.prototype.style,
        disclosureTextStyle:Text.prototype.style,
        disclosureIcon:Image.propTypes.source,
        disclosureVecIcon:PropTypes.object,
        showDisclosureIndicator:React.PropTypes.bool
    }
    constructor(props, context)
    {
        super(props, context);
    }

    render()
    {
        let icon = this.props.vectoricon? this.props.vectoricon : this.props.icon?<Image style={[styles.icon,this.props.iconStyle]} source={this.props.icon}/>:null;
        let title = this.props.title?<Text style={[styles.title,this.props.titleStyle]}>{this.props.title}</Text>:null;
        let defaultTitle = this.props.defaultTitle?<Text style={[styles.defaultTitle,this.props.defaultTitleStyle]}>{this.props.defaultTitle}</Text>:null;
        let disclosureText = this.props.disclosureText?<Text style={[styles.disclosureText,this.props.disclosureTextStyle]}
                                                             numberOfLines={1}>{this.props.disclosureText}</Text>:null;
        let disclosureIndicator = this.props.disclosureVecIcon ? this.props.disclosureVecIcon : this.props.showDisclosureIndicator?<Image source={this.props.disclosureIcon} style={styles.disclosureIndicator}/>:null;
        let leftView = (
            <View style={[styles.left]}>
                {icon}
                <View style={{flexDirection:'column'}}>
                {title}
                {defaultTitle}
                </View>
            </View>
        )
        let rightView = (
            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',}}>
                {disclosureText}
                {disclosureIndicator}
            </View>
        )
        return (
            <View style={[styles.container,this.props.style]}>
                {leftView}
                {rightView}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        backgroundColor:'#fff',
        flexDirection:'row',
        height:50,
        paddingRight:10,
        paddingLeft:5,
        justifyContent:'center'
    },
    left:{flexDirection:'row',alignItems:'center',},
    icon:{marginRight:20},
    title:{},
    defaultTitle:{marginTop:10,color:'#999999'},
    disclosureText:{color:'#999999',fontSize:14},
    disclosureIndicator:{marginLeft:8}
});

export default ListCellView;